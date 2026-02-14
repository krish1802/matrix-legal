@echo off
echo ==========================================
echo Fixing Configuration Files
echo ==========================================
echo.

cd frontend

echo Fixing postcss.config.js...
(
echo module.exports = {
echo   plugins: {
echo     tailwindcss: {},
echo     autoprefixer: {},
echo   },
echo }
) > postcss.config.js

echo Fixing tailwind.config.js...
(
echo /** @type {import('tailwindcss'^).Config} */
echo module.exports = {
echo   content: [
echo     "./index.html",
echo     "./src/**/*.{js,ts,jsx,tsx}",
echo   ],
echo   theme: {
echo     extend: {
echo       colors: {
echo         cream: '#FAF7F2',
echo         'beige-light': '#F0EBE3',
echo         beige: '#E4DCC8',
echo         'beige-dark': '#D4C4AD',
echo         'brown-light': '#A0826D',
echo         brown: '#7D6556',
echo         'brown-dark': '#5C4A3D',
echo         'brown-darker': '#453829',
echo         'brown-darkest': '#2D2319',
echo         gold: '#C8A882',
echo         'gold-light': '#D9BC9F',
echo       },
echo       fontFamily: {
echo         serif: ['"Playfair Display"', 'serif'],
echo         sans: ['"Source Sans 3"', 'sans-serif'],
echo       },
echo     },
echo   },
echo   plugins: [],
echo }
) > tailwind.config.js

echo.
echo ==========================================
echo Configuration files fixed!
echo ==========================================
echo.
echo You can now run: start-frontend.bat
echo.
pause
