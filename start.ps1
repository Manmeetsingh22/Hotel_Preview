$env:Path = "C:\Program Files\nodejs;" + $env:Path
Write-Host "Starting Aura Grand Hotel Next.js Server on http://localhost:3000 ..." -ForegroundColor Gold
Set-Location -Path $PSScriptRoot
& "C:\Program Files\nodejs\npm.cmd" run dev
