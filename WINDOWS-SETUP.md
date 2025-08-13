# Windows Setup Guide for Hassan's Portfolio

## Quick Start (5 Minutes)

### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download the **LTS version** (recommended for most users)
3. Run the installer and follow the setup wizard
4. **Important**: Check "Add to PATH" during installation

### Step 2: Verify Installation
1. Press `Win + R`, type `cmd`, and press Enter
2. Type these commands to verify:
   ```
   node --version
   npm --version
   ```
3. You should see version numbers (like `v20.11.0` and `10.2.4`)

### Step 3: Run the Portfolio
1. **Extract the portfolio folder** to your Desktop or Documents
2. **Double-click `install-dependencies.bat`** and wait for it to finish
3. **Double-click `start-dev.bat`** to start the server
4. **Open your browser** and go to `http://localhost:5000`

That's it! The portfolio should now be running on your Windows computer.

## Troubleshooting

### "npm is not recognized"
- Restart your computer after installing Node.js
- Or add Node.js to your PATH manually

### "Permission denied" errors
- Right-click Command Prompt and select "Run as administrator"
- Or use PowerShell instead of Command Prompt

### Port 5000 already in use
- Close any other applications using port 5000
- Or change the port in `server/index.ts`

### Dependencies won't install
- Try deleting the `node_modules` folder and running `npm install` again
- Make sure you have an internet connection

## Alternative Methods

### Using Command Prompt
1. Open Command Prompt in the project folder
2. Run: `npm install`
3. Run: `npm run dev`

### Using PowerShell
1. Open PowerShell in the project folder
2. Run: `npm install`
3. Run: `npm run dev`

### Using Windows Terminal (Windows 11)
1. Right-click in the project folder and select "Open in Terminal"
2. Run: `npm install`
3. Run: `npm run dev`

## What Each File Does

- `package.json` - Project configuration and dependencies
- `start-dev.bat` - Easy way to start the development server
- `install-dependencies.bat` - Easy way to install all required packages
- `client/` - The website frontend (React)
- `server/` - The backend server (Express.js)
- `attached_assets/` - Your CV and profile images

## Editing the Portfolio

### To change content:
- Open the project in VS Code or any text editor
- Edit files in the `client/src/components/` folder
- Save and the website will automatically update

### To add new images:
- Put images in the `attached_assets/` folder
- Update the component files to reference the new images

### To update your CV:
- Replace the PDF file in `attached_assets/`
- Update the filename in `server/routes.ts`

## Need Help?

If you run into issues:
1. Make sure Node.js is properly installed
2. Try restarting your computer
3. Check that you have an internet connection
4. Make sure no antivirus is blocking the installation

The portfolio will be available at `http://localhost:5000` when running successfully.