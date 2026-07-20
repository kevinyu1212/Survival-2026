# ?? SaaS 유료 기능 및 결제 연동 명세서 (Monorepo Paid Specification)

## 1. 개요
본 문서는 `billing-kit` 및 모노레포 기반 SaaS 애플리케이션의 유료화 모델, 기능 접근 제어(Feature Gating), 그리고 결제 프로세스 연동 규격을 정의합니다.

---

## 2. 핵심 모듈 규격 (`billing-kit`)

### A. 기능 접근 제어 (Feature Gating)
* **메서드**: `verifyProAccess(role: string)`
* **설명**: 사용자의 권한(`role`)을 검사하여 Pro 전용 고급 기능 및 모델 접근 여부를 결정합니다.
* **통제 규칙**:
  * `free`: 접근 차단 (`granted: false`) 및 업그레이드 유도 메시지 반환
  * `pro` / `enterprise`: 접근 허용 (`granted: true`)

### B. 결제 세션 생성 (Checkout Session)
* **메서드**: `createCheckoutSession(options: CheckoutOptions)`
* **지원 요금제 (`plan`)**:
  1. `pro_monthly`: 월간 프로 구독 플랜
  2. `credit_pack_100`: 추가 AI 크레딧 100개 패키지
* **반환 값**: Stripe 스타일의 결제 리다이렉트 URL (`checkoutUrl`) 및 세션 ID

---

## 3. 비즈니스 플로우
1. **무료 사용자 감지**: 크레딧 소진 또는 Pro 전용 모델 호출 시도
2. **권한 검증 실패**: `verifyProAccess`에 의해 거부
3. **결제 유도 (Checkout)**: `createCheckoutSession`을 호출하여 Stripe 결제창 URL 생성 및 전달
4. **결제 완료 후**: 웹훅(Webhook)을 통해 사용자 역할을 `pro`로 승급 및 크레딧 충전
