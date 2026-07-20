param([string]$Name, [string]$Category)
$Template = Get-Content "06_AI/Prompt-Library/Core/standard_pattern.md" -Raw
$Target = "06_AI/Prompt-Library/$Category/$Name.md"
$Template | Set-Content -Path $Target
Write-Host "생성 완료: $Target"
