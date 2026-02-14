# Free HTTPS Deployment Guide for Matrix Legal

## 🚀 Best Free Deployment Options with HTTPS

I'll show you **3 completely free options** to deploy your Matrix Legal website with HTTPS:

### Option 1: Vercel (Frontend) + Railway (Backend) - EASIEST ⭐ RECOMMENDED
### Option 2: Netlify (Frontend) + Render (Backend)
### Option 3: All-in-One with Railway or Render

---

## ⭐ OPTION 1: VERCEL + RAILWAY (RECOMMENDED)

This is the **easiest and most reliable** free option with automatic HTTPS.

### Part A: Deploy Backend on Railway (Free $5/month credit)

#### Step 1: Prepare Your Backend

1. **Create a `Procfile`** in the `backend` folder:
   ```
   web: gunicorn run:app
   ```

2. **Update `backend/requirements.txt`** to ensure gunicorn is included:
   ```
   Flask==3.0.0
   Flask-SQLAlchemy==3.1.1
   Flask-CORS==4.0.0
   Flask-Mail==0.9.1
   python-dotenv==1.0.0
   gunicorn==21.2.0
   psycopg2-binary==2.9.9
   ```

3. **Create `backend/railway.json`**:
   ```json
   {
     "$schema": "https://railway.app/railway.schema.json",
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "gunicorn run:app",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

#### Step 2: Deploy to Railway

1. **Go to [Railway.app](https://railway.app/)**
2. **Sign up** with GitHub (free)
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. **Connect your GitHub** and select your repository
6. Select the **backend folder** (or upload just the backend folder)
7. Railway will auto-detect Python and deploy

#### Step 3: Configure Environment Variables on Railway

In Railway dashboard:
1. Go to **"Variables"** tab
2. Add these variables:
   ```
   DATABASE_URL=<Railway will provide PostgreSQL URL>
   SECRET_KEY=your-production-secret-key-here
   FLASK_ENV=production
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=your-email@gmail.com
   MAIL_PASSWORD=your-app-password
   ```

3. **Add PostgreSQL Database:**
   - Click **"New"** → **"Database"** → **"Add PostgreSQL"**
   - Railway automatically connects it to your app
   - The `DATABASE_URL` variable is auto-set

#### Step 4: Get Your Backend URL

- Railway provides a URL like: `https://your-app.railway.app`
- **Copy this URL** - you'll need it for frontend

#### Step 5: Enable Public Access

1. Go to **"Settings"** tab
2. Under **"Networking"**, click **"Generate Domain"**
3. Your API is now live with HTTPS! ✅

---

### Part B: Deploy Frontend on Vercel (Unlimited free)

#### Step 1: Prepare Your Frontend

1. **Update `frontend/.env`**:
   ```
   VITE_API_URL=https://your-app.railway.app/api
   ```
   *(Replace with your Railway backend URL)*

2. **Create `frontend/vercel.json`**:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

#### Step 2: Deploy to Vercel

**Method A: Via Vercel Dashboard (Easiest)**

1. **Go to [Vercel.com](https://vercel.com/)**
2. **Sign up** with GitHub (free)
3. Click **"Add New"** → **"Project"**
4. **Import your repository**
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. **Add Environment Variable**:
   - Key: `VITE_API_URL`
   - Value: `https://your-app.railway.app/api`

7. Click **"Deploy"**

**Method B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Go to frontend folder
cd frontend

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Step 3: Get Your Website URL

- Vercel provides: `https://your-site.vercel.app`
- **Automatic HTTPS enabled!** ✅
- You can add a custom domain later (free)

---

## 🎯 OPTION 2: NETLIFY + RENDER

### Part A: Deploy Backend on Render

1. **Go to [Render.com](https://render.com/)**
2. **Sign up** (free)
3. Click **"New"** → **"Web Service"**
4. Connect GitHub repository
5. Configure:
   - **Name**: matrix-legal-api
   - **Environment**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn run:app`
   - **Instance Type**: Free

6. **Add Environment Variables** (same as Railway)

7. **Add PostgreSQL Database**:
   - Click **"New"** → **"PostgreSQL"**
   - Free tier available
   - Copy connection string to `DATABASE_URL`

8. Get URL: `https://your-api.onrender.com`

### Part B: Deploy Frontend on Netlify

1. **Go to [Netlify.com](https://www.netlify.com/)**
2. **Sign up** with GitHub (free)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect GitHub
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

6. **Add Environment Variable**:
   ```
   VITE_API_URL=https://your-api.onrender.com/api
   ```

7. **Create `frontend/netlify.toml`**:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

8. Deploy - Get URL: `https://your-site.netlify.app`

---

## 🔧 OPTION 3: ALL-IN-ONE DEPLOYMENT

### Railway (Backend + Frontend Together)

You can deploy both on Railway:

1. Deploy backend as described above
2. For frontend:
   - Create new service
   - Add `package.json` build script
   - Set start command: `npm run preview`
   - Railway gives you HTTPS URL

---

## 🌐 Adding Custom Domain (FREE)

### For Vercel:
1. Go to project **"Settings"** → **"Domains"**
2. Add your domain (e.g., `matrixlegal.in`)
3. Update DNS records at your domain registrar:
   ```
   A Record: 76.76.21.21
   CNAME: cname.vercel-dns.com
   ```
4. **HTTPS is automatic!** ✅

### For Railway:
1. Go to **"Settings"** → **"Domains"**
2. Add custom domain
3. Update DNS:
   ```
   CNAME: your-app.railway.app
   ```
4. **HTTPS is automatic!** ✅

---

## 📋 STEP-BY-STEP: COMPLETE DEPLOYMENT

### Step 1: Push Code to GitHub

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub.com
# Then:
git remote add origin https://github.com/yourusername/matrix-legal.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy Backend (Railway)

1. ✅ Sign up at Railway.app
2. ✅ New Project → Deploy from GitHub
3. ✅ Select backend folder
4. ✅ Add PostgreSQL database
5. ✅ Set environment variables
6. ✅ Copy API URL: `https://your-api.railway.app`

### Step 3: Deploy Frontend (Vercel)

1. ✅ Sign up at Vercel.com
2. ✅ Import GitHub repo
3. ✅ Set root directory: `frontend`
4. ✅ Add env variable: `VITE_API_URL`
5. ✅ Deploy!
6. ✅ Get URL: `https://your-site.vercel.app`

### Step 4: Test Everything

1. ✅ Visit your Vercel URL
2. ✅ Check HTTPS (🔒 lock icon)
3. ✅ Test contact form
4. ✅ Verify all pages work

---

## 🔒 HTTPS Certificate Details

All these platforms provide **free SSL/TLS certificates** automatically:

- **Let's Encrypt** certificates (industry standard)
- **Automatic renewal** (no manual work)
- **A+ SSL rating** (highest security)
- **Works on all browsers**

---

## 💰 Cost Comparison

| Platform | Backend | Frontend | Database | Total |
|----------|---------|----------|----------|-------|
| **Vercel + Railway** | Free ($5 credit) | Free | Free (500MB) | **$0/month** |
| **Netlify + Render** | Free (750 hours) | Free | Free | **$0/month** |
| **Railway All** | Free ($5 credit) | Free | Free | **$0/month** |

All include **free HTTPS**! ✅

---

## ⚡ Quick Deploy (5 Minutes)

**Fastest way to get online:**

```bash
# 1. Push to GitHub (if not already)
git init && git add . && git commit -m "Deploy"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# 2. Deploy backend on Railway.app
- Sign up → New Project → Deploy from GitHub
- Add PostgreSQL → Set environment variables
- Copy API URL

# 3. Deploy frontend on Vercel.com
- Sign up → Import project → Set API URL
- Deploy!

# Done! You now have:
# ✅ Frontend: https://your-site.vercel.app
# ✅ Backend: https://your-api.railway.app
# ✅ HTTPS enabled on both
# ✅ Database connected
# ✅ Contact form working
```

---

## 🐛 Troubleshooting

### Frontend can't connect to backend
- Check CORS is enabled (it is in your code)
- Verify `VITE_API_URL` environment variable
- Make sure Railway backend is running

### Database connection error
- Verify `DATABASE_URL` in Railway
- Check PostgreSQL is running
- Railway auto-provides this, should work automatically

### Email not sending
- Update `MAIL_USERNAME` and `MAIL_PASSWORD`
- Use Gmail App Password (not regular password)
- Test locally first

---

## 📚 Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **Netlify Docs**: https://docs.netlify.com
- **Render Docs**: https://render.com/docs

---

## ✅ Final Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed on Railway
- [ ] PostgreSQL database added
- [ ] Environment variables set
- [ ] Frontend deployed on Vercel
- [ ] API URL configured in frontend
- [ ] HTTPS working (🔒 icon)
- [ ] Contact form tested
- [ ] All pages loading
- [ ] Mobile responsive checked

---

## 🎉 You're Live!

Your Matrix Legal website is now:
- ✅ Live on the internet
- ✅ Secured with HTTPS
- ✅ Completely FREE
- ✅ Fast and reliable
- ✅ Auto-deployed on git push

**Congratulations!** 🚀
