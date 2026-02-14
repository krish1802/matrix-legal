@echo off
echo ==========================================
echo Matrix Legal - Full Stack Setup (Windows)
echo ==========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo X Python is not installed. Please install Python 3.8 or higher.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo X Node.js is not installed. Please install Node.js 16 or higher.
    pause
    exit /b 1
)

echo √ Python and Node.js are installed
echo.

REM Backend Setup
echo Setting up Backend...
cd backend

REM Create virtual environment
echo Creating Python virtual environment...
python -m venv venv

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Install Python dependencies
echo Installing Python dependencies...
pip install -r requirements.txt

REM Create .env file
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo ! Please edit backend\.env with your configuration
)

cd ..

REM Frontend Setup
echo.
echo Setting up Frontend...
cd frontend

REM Install Node dependencies
echo Installing Node.js dependencies...
call npm install

REM Create .env file
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
)

cd ..

echo.
echo ==========================================
echo √ Setup Complete!
echo ==========================================
echo.
echo To start the application:
echo.
echo Backend (Terminal 1):
echo   cd backend
echo   venv\Scripts\activate
echo   python run.py
echo.
echo Frontend (Terminal 2 - New Command Prompt):
echo   cd frontend
echo   npm run dev
echo.
echo The app will be available at:
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:5000
echo.
pause
