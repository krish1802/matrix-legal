@echo off
echo ==========================================
echo Matrix Legal - Starting Both Servers
echo ==========================================
echo.
echo This will open two new windows:
echo 1. Backend server (Flask)
echo 2. Frontend server (Vite)
echo.
echo Press any key to continue...
pause >nul

echo.
echo Starting Backend Server...
start "Matrix Legal - Backend" cmd /k start-backend.bat

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Matrix Legal - Frontend" cmd /k start-frontend.bat

echo.
echo ==========================================
echo Both servers are starting!
echo ==========================================
echo.
echo Check the new windows that opened.
echo.
echo When both are ready:
echo - Backend:  http://localhost:5000
echo - Frontend: http://localhost:3000
echo.
echo Press any key to close this window...
pause >nul
