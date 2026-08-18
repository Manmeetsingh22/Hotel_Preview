@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting Aura Grand Hotel Next.js Server on http://localhost:3000 ...
cd /d "%~dp0"
"C:\Program Files\nodejs\npm.cmd" run dev
pause
