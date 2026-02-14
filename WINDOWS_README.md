# Matrix Legal - Windows Installation Guide

## 🪟 For Windows Users

Welcome! This guide is specifically for Windows users to get Matrix Legal running smoothly.

## 📦 What You Downloaded

You have a complete full-stack law firm website:
- ✅ React frontend with beautiful beige & brown design
- ✅ Flask backend with database
- ✅ All Windows-compatible scripts included

## ⚡ Super Quick Start (3 Clicks!)

### Step 1: Extract
- Right-click `matrix-legal-fullstack.zip`
- Click "Extract All..."
- Choose a location (e.g., `C:\Projects\`)

### Step 2: Setup
- Double-click `setup.bat`
- Wait 2-3 minutes for installation

### Step 3: Run
- Double-click `START_ALL.bat`
- Two windows will open (backend + frontend)
- Open browser: http://localhost:3000

**That's it! 🎉**

## 📋 Before You Start

### Required Software

1. **Python 3.8 or higher**
   - Download: https://www.python.org/downloads/
   - ⚠️ **IMPORTANT:** Check "Add Python to PATH" during installation!

2. **Node.js 16 or higher**
   - Download: https://nodejs.org/
   - Choose "LTS" version (recommended)

### Check If Installed

Open Command Prompt (Win + R, type `cmd`, Enter) and run:
```cmd
python --version
node --version
npm --version
```

If all three show version numbers, you're good to go!

## 🚀 Installation Steps

### Method 1: Automated Setup (Easiest)

1. **Extract the ZIP file** to a folder without spaces in the path
   - ✅ Good: `C:\Projects\matrix-legal-fullstack`
   - ❌ Bad: `C:\My Projects\matrix legal`

2. **Run setup.bat**
   - Open the folder
   - Double-click `setup.bat`
   - Wait for installation (2-3 minutes)
   - A black window will show progress

3. **Configure (optional)**
   - Edit `backend\.env` if you want email notifications
   - Edit `frontend\.env` if backend is on different port

### Method 2: Manual Setup

If the automated setup doesn't work:

**Backend:**
```cmd
cd matrix-legal-fullstack\backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

**Frontend:**
```cmd
cd matrix-legal-fullstack\frontend
npm install
copy .env.example .env
```

## ▶️ Running the Application

### Easy Way: Use START_ALL.bat

1. Double-click `START_ALL.bat`
2. Two command windows will open
3. Wait 10-20 seconds for servers to start
4. Open browser: http://localhost:3000

### Manual Way: Separate Windows

**Terminal 1 - Backend:**
- Double-click `start-backend.bat`

**Terminal 2 - Frontend:**
- Double-click `start-frontend.bat`

### Command Line Way:

**Backend (Terminal 1):**
```cmd
cd backend
venv\Scripts\activate
python run.py
```

**Frontend (Terminal 2):**
```cmd
cd frontend
npm run dev
```

## 🌐 Access Points

Once running, open your browser:
- **Main Website:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health

## ⚙️ Configuration

### Email Setup (Optional)

To receive contact form emails:

1. Open `backend\.env` in Notepad
2. Update these lines:
   ```
   MAIL_USERNAME=your-email@gmail.com
   MAIL_PASSWORD=your-app-password
   ```
3. For Gmail, create an "App Password":
   - Go to: https://myaccount.google.com/apppasswords
   - Generate password for "Mail"
   - Use that password in .env

## 🛠️ Troubleshooting

### Problem: "Python not recognized"

**Solution:**
1. Reinstall Python
2. Check "Add Python to PATH"
3. Restart Command Prompt

Or use full path:
```cmd
C:\Python39\python.exe -m venv venv
```

### Problem: "npm not found"

**Solution:**
1. Restart Command Prompt after installing Node.js
2. Or reinstall Node.js
3. Check it's in PATH: `echo %PATH%`

### Problem: Port 5000 already in use

**Solution:**
```cmd
netstat -ano | findstr :5000
taskkill /PID <number> /F
```

### Problem: Permission denied

**Solution:**
- Right-click Command Prompt
- Select "Run as administrator"
- Try again

### Problem: Antivirus blocking

**Solution:**
- Add the project folder to antivirus exceptions
- Temporarily disable antivirus during setup

### Problem: Setup fails

**Solution:**
1. Delete `venv` folder in backend
2. Delete `node_modules` folder in frontend
3. Run `setup.bat` again

## 🔄 Stopping the Servers

- Press `Ctrl + C` in each terminal window
- Or close the terminal windows

## 📁 Project Structure

```
matrix-legal-fullstack/
├── backend/              ← Flask API server
│   ├── app/             ← Application code
│   ├── venv/            ← Python virtual environment
│   └── run.py           ← Start backend
├── frontend/            ← React website
│   ├── src/             ← Source code
│   ├── node_modules/    ← Node packages
│   └── index.html       ← Main HTML file
├── setup.bat            ← Installation script
├── START_ALL.bat        ← Start both servers
├── start-backend.bat    ← Start backend only
└── start-frontend.bat   ← Start frontend only
```

## 💡 Tips for Windows Users

1. **Use Windows Terminal** (from Microsoft Store)
   - Modern, tabbed terminal
   - Better than Command Prompt
   - Supports colors and emojis

2. **Use VS Code** (free editor)
   - Download: https://code.visualstudio.com/
   - Has integrated terminal
   - Great for coding

3. **Keep paths short**
   - Avoid spaces in folder names
   - Use simple paths like `C:\Projects\`

4. **Don't close terminal windows**
   - Keep them running while using the app
   - They show important logs

5. **Bookmark http://localhost:3000**
   - Easy access to your site

## 🎨 Customization

### Change Colors

Edit `frontend\tailwind.config.js`:
```javascript
colors: {
  cream: '#FAF7F2',     // Change these!
  gold: '#C8A882',
  // ... etc
}
```

### Add Content

Edit files in `frontend\src\pages\`:
- `Home.jsx` - Home page
- `Contact.jsx` - Contact page
- etc.

### Modify Database

Edit `backend\app\models.py`

## 📚 Documentation Files

- **README.md** - Complete documentation
- **QUICKSTART_WINDOWS.md** - This file (detailed Windows guide)
- **PROJECT_SUMMARY.md** - Project overview
- **QUICKSTART.md** - General quick start (Mac/Linux)

## 🆘 Getting Help

### Check These First:
1. Is Python installed? `python --version`
2. Is Node.js installed? `node --version`
3. Are both servers running?
4. Did you wait 10-20 seconds after starting?
5. Is the URL correct? http://localhost:3000

### Still Having Issues?

1. **Read error messages** - They usually tell you what's wrong
2. **Check antivirus** - It might be blocking
3. **Try as Administrator** - Right-click → Run as administrator
4. **Google the error** - Many Windows issues are common
5. **Check the logs** - Read what the terminal windows show

## ✅ Verification Checklist

After installation, verify:

- [ ] `setup.bat` completed without errors
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] http://localhost:3000 shows the website
- [ ] http://localhost:5000/api/health returns JSON
- [ ] Contact form can be submitted
- [ ] No red errors in terminal windows

## 🚀 Next Steps

1. ✅ **Test all pages** - Click around the website
2. ✅ **Submit contact form** - Make sure it works
3. ✅ **Customize colors** - Make it yours
4. ✅ **Add your content** - Replace placeholder text
5. ✅ **Configure email** - Get form notifications
6. ✅ **Deploy online** - When ready for production

## 🎉 Success!

If you can see the website at http://localhost:3000, you're all set!

The Matrix Legal website is now running on your Windows machine.

**Enjoy building! 🚀**

---

**Need more help?** Check the other documentation files:
- `README.md` - Full technical documentation
- `PROJECT_SUMMARY.md` - What's included in the project
