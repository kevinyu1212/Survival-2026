# Contributing to Survival-2026 Code-Library

Thank you for your interest in contributing! Contributions make the open-source community a better place.

## How to Contribute
1. Fork the repository.
2. Create your feature branch (\git checkout -b feature/AmazingFeature\).
3. Commit your changes (\git commit -m 'Add some AmazingFeature'\).
4. Push to the branch (\git push origin feature/AmazingFeature\).
5. Open a Pull Request.

## Development Workflow
\\\ash
npm install
npm run build:all
\\\
"@

# 2. 깃허브 이슈 템플릿 폴더 및 파일 생성 (버그 신고용)
New-Item -ItemType Directory -Force -Path ".github\ISSUE_TEMPLATE" | Out-Null

Set-Content -Path ".github\ISSUE_TEMPLATE\bug_report.md" -Value @"
---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: 'bug'
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'

**Expected behavior**
A clear and concise description of what you expected to happen.
