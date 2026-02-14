@echo off
echo ==========================================
echo Git Setup and First Commit
echo ==========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo X Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo Initializing Git repository...
git init

echo.
echo Adding all files...
git add .

echo.
echo Creating first commit...
git commit -m "Initial commit - Matrix Legal website"

echo.
echo ==========================================
echo √ Git repository initialized!
echo ==========================================
echo.
echo Next steps:
echo.
echo 1. Create a repository on GitHub.com
echo 2. Run these commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/matrix-legal.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Then deploy:
echo    - Backend on Railway.app
echo    - Frontend on Vercel.com
echo.
echo See FREE_HTTPS_DEPLOYMENT.md for detailed instructions!
echo.
pause
