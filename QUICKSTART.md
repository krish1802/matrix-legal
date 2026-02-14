# Matrix Legal - Quick Start Guide

## 🚀 Quick Start (5 minutes)

### Option 1: Automatic Setup (Recommended)

```bash
# Run the setup script
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

#### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your settings
python run.py
```

#### Frontend Setup (in a new terminal)
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📋 First Steps

1. **Configure Email** (optional but recommended):
   - Edit `backend/.env`
   - Add your SMTP details (Gmail example):
     ```
     MAIL_USERNAME=your-email@gmail.com
     MAIL_PASSWORD=your-app-password
     ```

2. **Test the Contact Form**:
   - Navigate to http://localhost:3000/contact
   - Fill out and submit the form
   - Check your database or email

3. **Explore the Admin Panel** (coming soon):
   - View contacts, consultations, and subscribers

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js` to modify the color palette.

### Add Content
- Update `frontend/src/pages/` for page content
- Modify `backend/app/models.py` to add new database tables

### Add New Pages
1. Create component in `frontend/src/pages/`
2. Add route in `frontend/src/App.jsx`
3. Update navigation in `frontend/src/components/Navbar.jsx`

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is available
- Verify Python virtual environment is activated
- Check `.env` file exists and is properly configured

### Frontend won't start
- Check if port 3000 is available
- Delete `node_modules` and run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Database errors
- Delete the `.db` file and restart the backend
- Check SQLAlchemy connection string

### Email not sending
- Verify SMTP credentials in `.env`
- For Gmail, use an "App Password" instead of your regular password
- Check if your email provider allows SMTP access

## 📚 Next Steps

1. **Deploy to Production**:
   - Frontend: Vercel, Netlify
   - Backend: Heroku, Railway, DigitalOcean

2. **Add More Features**:
   - Admin dashboard
   - User authentication
   - Payment integration
   - Document management

3. **Optimize Performance**:
   - Enable caching
   - Optimize images
   - Add CDN

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Review API documentation in the README
- Contact: info@matrixlegal.in

## 🎉 You're All Set!

Your Matrix Legal website is now running. Start customizing and building!
