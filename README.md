# 🚀 Abhinav Raskar — Developer Portfolio

A personal developer portfolio built using the **MERN stack** to showcase my technical skills, projects, experience, and contact information. The portfolio provides a central place to explore my work and connect with me professionally.

## 🌐 Live Deployment

- **Frontend Deployment (Vercel Dashboard):** [View Vercel Project](https://vercel.com/abhinav-9ae0/abhinav-portfolio)
- **Backend API (Render):** [View Backend Service](https://abhinav-portfolio-1-fakv.onrender.com)

> **Note:** The Vercel link above opens the deployment dashboard. For visitors, use your public Vercel website URL.

## ✨ Features

- Responsive personal portfolio website
- Introduction and professional profile
- Technical skills showcase
- Projects and project links
- Education and professional experience
- Resume access
- Contact form integrated with the backend API
- Separate frontend and backend deployments

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Bootstrap (if used in the project)

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- MongoDB Atlas

### Deployment
- Vercel — Frontend
- Render — Backend API
- GitHub — Version control and source code

## 📂 Project Structure

```text
Abhinav-Portfolio/
├── client/                 # React frontend
│   ├── public/             # Static assets and resume
│   ├── src/                # React components and styles
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── routes/             # API routes
│   ├── server.js           # Backend entry point
│   └── package.json
├── .gitignore
└── README.md
```

*The structure above is illustrative; adjust it if your repository differs.*

## ⚙️ Run Locally

### Prerequisites

- Node.js and npm
- MongoDB Atlas account or a local MongoDB instance
- Git

### 1. Clone the repository

```bash
git clone https://github.com/AbhinavRaskar/Abhinav-Portfolio.git
cd Abhinav-Portfolio
```

### 2. Set up the frontend

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

### 3. Set up the backend

Open another terminal:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

Replace the MongoDB placeholder with your connection string. **Never commit real credentials or API keys to GitHub.**

Start the backend:

```bash
npm start
```

The frontend should be available at `http://localhost:5173` and the backend at `http://localhost:5000`, assuming the default Vite and Express ports are configured.

## 🚀 Deployment Configuration

### Frontend — Vercel

Configure the Vercel project with:

- **Repository:** `AbhinavRaskar/Abhinav-Portfolio`
- **Root Directory:** `client`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variable:**

```env
VITE_API_URL=https://abhinav-portfolio-1-fakv.onrender.com
```

Redeploy after changing environment variables.

### Backend — Render

Configure the Render web service with:

- **Repository:** `AbhinavRaskar/Abhinav-Portfolio`
- **Root Directory:** `server`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

Set the following environment variables in Render:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=your_public_vercel_website_url
```

Use your actual public Vercel website URL for `CLIENT_URL`, not the Vercel dashboard URL.

## 🔒 Security

- Keep `.env` files out of version control.
- Store database credentials in deployment environment variables.
- Never expose MongoDB passwords, API keys, or other secrets in source code.
- Configure CORS to allow only the intended frontend origin.

## 👨‍💻 About Me

I'm **Abhinav Arun Raskar**, a Computer Engineering graduate with an interest in full-stack development and AI-powered applications. I enjoy building practical web applications and learning technologies that solve real-world problems.

### Connect With Me

- **GitHub:** [AbhinavRaskar](https://github.com/AbhinavRaskar)
- **LinkedIn:** [Abhinav Raskar](https://www.linkedin.com/in/abhinavraskar/)
- **Email:** [abhinavraskar2@gmail.com](mailto:abhinavraskar2@gmail.com)

---

⭐ If you find this project interesting, feel free to explore the repository and connect with me!
