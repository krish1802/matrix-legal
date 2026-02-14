# Matrix Legal - Full Stack Website

A modern, full-stack law firm website built with React, Flask, and Tailwind CSS featuring a sophisticated beige and brown color palette.

## 🎨 Features

- **Modern React Frontend** with Vite, React Router, and Framer Motion animations
- **RESTful Flask Backend** with SQLAlchemy ORM
- **Responsive Design** with Tailwind CSS
- **Contact Form** with email notifications
- **Consultation Booking System**
- **Newsletter Subscription**
- **Blog Management**
- **Team Directory**
- **Multiple Office Locations**

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router v6
- Tailwind CSS
- Framer Motion (animations)
- Axios (API calls)
- React Hook Form (form handling)
- React Toastify (notifications)
- React Icons

### Backend
- Flask 3.0
- SQLAlchemy (ORM)
- Flask-CORS
- Flask-Mail
- SQLite/PostgreSQL

## 📁 Project Structure

```
matrix-legal-fullstack/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   └── routes.py
│   ├── config/
│   │   └── config.py
│   ├── run.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8+
- pip

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create environment file:
```bash
cp .env.example .env
```

5. Edit `.env` with your configuration (database, email settings, etc.)

6. Initialize the database:
```bash
python run.py
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🔧 Configuration

### Backend Configuration

Edit `backend/.env`:

```env
SECRET_KEY=your-secret-key
DATABASE_URL=sqlite:///matrix_legal.db  # Or PostgreSQL URL
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

### Frontend Configuration

Edit `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📡 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (with pagination)

### Consultation
- `POST /api/consultation` - Book a consultation
- `GET /api/consultations` - Get all consultations

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

### Blog
- `GET /api/blog/posts` - Get all blog posts
- `GET /api/blog/posts/:slug` - Get single blog post

### Team
- `GET /api/team` - Get team members

### Health Check
- `GET /api/health` - Check API status

## 🎨 Design System

### Color Palette

```css
--cream: #FAF7F2
--beige-light: #F0EBE3
--beige: #E4DCC8
--beige-dark: #D4C4AD
--brown-light: #A0826D
--brown: #7D6556
--brown-dark: #5C4A3D
--brown-darker: #453829
--brown-darkest: #2D2319
--gold: #C8A882
--gold-light: #D9BC9F
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Source Sans 3 (sans-serif)

## 📦 Building for Production

### Frontend

```bash
cd frontend
npm run build
```

The build output will be in `frontend/dist/`

### Backend

For production deployment, use a production-ready server like Gunicorn:

```bash
gunicorn -w 4 -b 0.0.0.0:5000 run:app
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Connect your repository to Vercel or Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variable: `VITE_API_URL`

### Backend (Heroku/Railway/DigitalOcean)

1. Set up PostgreSQL database
2. Configure environment variables
3. Deploy using your preferred platform

## 📝 Database Schema

### Contact
- id, name, email, phone, subject, message, created_at, status

### Consultation
- id, name, email, phone, practice_area, preferred_date, preferred_time, office_location, description, created_at, status

### NewsletterSubscriber
- id, email, subscribed_at, is_active

### BlogPost
- id, title, slug, excerpt, content, author, category, image_url, published, created_at, updated_at

### TeamMember
- id, name, position, bio, email, phone, image_url, practice_areas, office_location, order, is_active

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For support, email info@matrixlegal.in

## 🙏 Acknowledgments

- Design inspired by modern legal practices
- Built with modern web technologies
- Optimized for performance and user experience
