# polycarp-dev-portfolio

Welcome to my interactive developer portfolio! This full-stack web application is built using **React** (frontend) and **Flask** (backend) to showcase my programming projects, skills, and technical interests. Designed for interactivity, performance, and personal branding.

---

## 🧠 Identity

- **Name**: Polycarp  
- **🛰️ Code alias**: kingslayer254  
- **📡 Coordinates**: Ngong_111  
- **🔌 Wired to**: [@mark_polycarp_](https://twitter.com/mark_polycarp_)  
- **📥 Email**: markpollycarp@gmail.com  
- **📞 Encrypted Line**: +44 7429 144739  
- **GitHub**: [pollycarp](https://github.com/pollycarp)

---

## 🚀 Tech Stack

### Frontend
- React
- React Router
- Framer Motion (for animations)
- Axios (for API communication)
- Tailwind CSS or Styled Components

### Backend
- Flask
- Flask-CORS
- Flask-Mail (optional)
- SQLite / JSON for lightweight data storage

---

## 📁 Project Structure

```
polycarp-dev-portfolio/
├── client/                         # React frontend
│   ├── public/                     # Static files (index.html, favicon, etc.)
│   └── src/
│       ├── assets/                 # Images, icons, fonts
│       ├── components/             # Reusable UI components (Navbar, Footer, etc.)
│       ├── pages/                  # Page-level components (Home, About, Projects)
│       ├── styles/                 # Global or module CSS (or Tailwind config)
│       ├── utils/                  # Helper functions, API services (Axios configs)
│       ├── App.js                  # Main app component
│       └── index.js                # Entry point for React
│
├── server/                         # Flask backend
│   ├── static/                     # Built React files (for production deployment)
│   ├── templates/                  # Optional (Jinja2 fallback, HTML base if needed)
│   ├── api/                        # Modular API routes (e.g. contact.py, projects.py)
│   ├── data/                       # Local data files (JSON, SQLite DB)
│   ├── utils/                      # Utility modules (mail, data loaders)
│   ├── config.py                   # App config (CORS, env vars, etc.)
│   ├── app.py                      # Flask app runner and entry point
│   ├── routes.py                   # Main API endpoints
│   └── requirements.txt            # Backend dependencies
│
├── .gitignore                      # Git ignored files/folders
├── README.md                       # Project documentation
└── polycarp-dev-portfolio_README.md  # Portfolio-specific README
```

---

## 💼 Features

- Responsive UI with animations
- API-driven project gallery
- Interactive contact form
- Live GitHub data integration (coming soon)
- Secure file sharing demo (planned)

---

## 🔧 Local Development

### React Frontend
```bash
cd client
npm install
npm start
```

### Flask Backend
```bash
cd server
pip install -r requirements.txt
python app.py
```

---

## 🌐 Deployment

- **Frontend**: Vercel or Netlify
- **Backend**: Render or Railway
- **Domain**: Custom via Namecheap or GitHub Pages (static)

---

## 📃 License

MIT License. See `LICENSE` for usage rights and limitations.
