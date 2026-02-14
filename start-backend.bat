@echo off
echo ==========================================
echo Starting Matrix Legal Backend
echo ==========================================
echo.

cd backend

if not exist venv (
    echo Error: Virtual environment not found!
    echo Please run setup.bat first.
    pause
    exit /b 1
)

echo Activating virtual environment...
call venv\Scripts\activate.bat

echo.
echo Starting Flask server on http://localhost:5000
echo Press Ctrl+C to stop
echo.

python run.py

pause
