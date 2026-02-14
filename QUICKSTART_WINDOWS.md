# Matrix Legal - Quick Start Guide (Windows)

## 🚀 Quick Start for Windows (5 minutes)

### Prerequisites
- **Python 3.8+** - Download from [python.org](https://www.python.org/downloads/)
- **Node.js 16+** - Download from [nodejs.org](https://nodejs.org/)
- **Git** (optional) - Download from [git-scm.com](https://git-scm.com/)

### Option 1: Automatic Setup (Recommended)

1. **Extract the project archive**
   - Right-click `matrix-legal-fullstack.tar.gz`
   - Extract to a folder (use 7-Zip or WinRAR if needed)

2. **Run the setup script**
   ```cmd
   cd matrix-legal-fullstack
   setup.bat
   ```

3. **Wait for installation** (this may take 2-3 minutes)

### Option 2: Manual Setup

#### Backend Setup

1. **Open Command Prompt** (Win + R, type `cmd`, press Enter)

2. **Navigate to backend folder**
   ```cmd
   cd path\to\matrix-legal-fullstack\backend
   ```

3. **Create virtual environment**
   ```cmd
   python -m venv venv
   ```

4. **Activate virtual environment**
   ```cmd
   venv\Scripts\activate
   ```

5. **Install dependencies**
   ```cmd
   pip install -r requirements.txt
   ```

6. **Create environment file**
   ```cmd
   copy .env.example .env
   ```

7. **Start the backend**
   ```cmd
   python run.py
   ```

#### Frontend Setup

1. **Open a NEW Command Prompt** (keep backend running)

2. **Navigate to frontend folder**
   ```cmd
   cd path\to\matrix-legal-fullstack\frontend
   ```

3. **Install dependencies**
   ```cmd
   npm install
   ```

4. **Create environment file**
   ```cmd
   copy .env.example .env
   ```

5. **Start the frontend**
   ```cmd
   npm run dev
   ```

## 🌐 Access the Application

Open your browser and visit:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 🔧 Windows-Specific Tips

### Using PowerShell (Alternative to CMD)

If you prefer PowerShell:

**Backend:**
```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python run.py
```

**Frontend:**
```powershell
cd frontend
npm install
npm run dev
```

**Note:** If you get an execution policy error in PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Using Git Bash (If you have Git installed)

The original `setup.sh` script will work in Git Bash:
```bash
chmod +x setup.sh
./setup.sh
```

### Python Command Variations

If `python` doesn't work, try:
- `python3`
- `py`
- `py -3`

### Common Issues on Windows

#### Issue: Port 5000 Already in Use
**Solution:**
```cmd
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

#### Issue: npm command not found
**Solution:** Restart Command Prompt after installing Node.js, or add Node.js to PATH manually.

#### Issue: Permission Denied
**Solution:** Run Command Prompt as Administrator (right-click → Run as administrator)

#### Issue: Python not recognized
**Solution:** 
1. Reinstall Python and check "Add Python to PATH"
2. Or manually add Python to PATH in System Environment Variables

#### Issue: Virtual environment activation fails
**Solution:** Use the full path:
```cmd
C:\path\to\project\backend\venv\Scripts\activate.bat
```

## 📋 Verify Installation

After both servers are running, verify everything works:

1. **Backend Health Check:**
   - Open browser: http://localhost:5000/api/health
   - Should see: `{"status": "healthy", "timestamp": "..."}`

2. **Frontend Check:**
   - Open browser: http://localhost:3000
   - Should see the Matrix Legal homepage

3. **Test Contact Form:**
   - Go to http://localhost:3000/contact
   - Fill and submit the form
   - Check backend console for logs

## 🛠️ Development Tools for Windows

### Recommended Code Editors
- **VS Code** - [code.visualstudio.com](https://code.visualstudio.com/)
- **PyCharm** - [jetbrains.com/pycharm](https://www.jetbrains.com/pycharm/)
- **Sublime Text** - [sublimetext.com](https://www.sublimetext.com/)

### Recommended Terminal
- **Windows Terminal** (from Microsoft Store) - Best modern terminal
- **Git Bash** - Unix-like commands on Windows
- **Command Prompt** - Built-in, always works

### Database Viewer
- **DB Browser for SQLite** - [sqlitebrowser.org](https://sqlitebrowser.org/)

## 🎯 Next Steps

1. **Configure Email** (optional):
   - Edit `backend\.env`
   - Add Gmail SMTP credentials:
     ```
     MAIL_USERNAME=your-email@gmail.com
     MAIL_PASSWORD=your-app-password
     ```
   - Get Gmail App Password: https://myaccount.google.com/apppasswords

2. **Customize the website:**
   - Edit colors in `frontend\tailwind.config.js`
   - Update content in `frontend\src\pages\`
   - Add your logo and images

3. **Test all features:**
   - Contact form
   - Newsletter subscription
   - Navigation

## 📁 Project Location

Keep your project in a simple path without spaces:
```
✅ Good: C:\Projects\matrix-legal-fullstack
✅ Good: C:\Users\YourName\Documents\matrix-legal
❌ Bad:  C:\My Projects\matrix legal fullstack
```

## 🔄 Stopping the Servers

**To stop backend:**
- Press `Ctrl + C` in the backend terminal

**To stop frontend:**
- Press `Ctrl + C` in the frontend terminal

## 🚀 Running Again Later

**Backend:**
```cmd
cd backend
venv\Scripts\activate
python run.py
```

**Frontend:**
```cmd
cd frontend
npm run dev
```

## 📞 Need Help?

Common Windows issues are usually:
1. PATH not set correctly
2. Port already in use
3. Permission issues (run as Administrator)
4. Antivirus blocking (add exception)

Check the main README.md for more details!

## ✨ Tips for Better Experience

1. **Use Windows Terminal** - Modern, tabbed terminal
2. **Pin to Taskbar** - Pin your terminal and browser
3. **Use VS Code** - Integrated terminal + editor
4. **Save .env files** - Don't lose your configuration
5. **Backup regularly** - Keep your database safe

---

**You're all set! Happy coding! 🎉**
