param([string]$LibName)
$BaseDir = "06_AI/Code-Library/$LibName"
mkdir $BaseDir -Force
Start-Process npm -ArgumentList "init -y" -WorkingDirectory $BaseDir -Wait -NoNewWindow
mkdir "$BaseDir/src" -Force
New-Item "$BaseDir/src/index.ts" -Force | Out-Null
Set-Content -Path "$BaseDir/src/index.ts" -Value "export const hello = () => 'Hello from $LibName';"
Write-Host "라이브러리 생성 완료: $BaseDir"
