@echo off
echo Starting Hassan's Portfolio Development Server...
echo.
echo Installing dependencies if needed...
call npm install
echo.
echo Starting development server...
echo Open http://localhost:5000 in your browser
echo Press Ctrl+C to stop the server
echo.
call npm run dev
pause