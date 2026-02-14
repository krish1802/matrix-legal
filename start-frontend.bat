@echo off
echo ==========================================
echo Starting Matrix Legal Frontend
echo ==========================================
echo.

cd frontend

if not exist node_modules (
    echo Error: Node modules not found!
    echo Please run setup.bat first.
    pause
    exit /b 1
)

echo.
echo Starting Vite dev server on http://localhost:3000
echo Press Ctrl+C to stop
echo.

call npm run dev

pause
