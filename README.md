# Abhinav Raskar — MERN Portfolio

A responsive, animated developer portfolio built with React + Vite, Tailwind CSS, Framer Motion, Express, and MongoDB.

## Requirements
- Node.js 20 or newer recommended
- npm
- MongoDB Atlas account or local MongoDB

## 1. Install dependencies

Open two terminals:

```bash
cd client
npm install
```

```bash
cd server
npm install
```

## 2. Configure environment variables

Copy `client/.env.example` to `client/.env` and edit if your API runs at a different URL:

```env
VITE_API_URL=http://localhost:5000/api
```

Copy `server/.env.example` to `server/.env` and set your actual MongoDB connection string and frontend URL:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

Never commit real `.env` files or expose database credentials in frontend variables.

## 3. Add your resume

Your supplied resume is included at `client/public/resume.pdf`. Replace it when you update your resume.

## 4. Run locally

Terminal 1:

```bash
cd server
npm run dev
```

Terminal 2:

```bash
cd client
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`. API health check: `http://localhost:5000/api/health`.

## 5. Customize content
- Edit `client/src/data/portfolio.js` to update profile, skills, projects, and education/experience.
- Verify every repository and demo URL before publishing.
- Add your real email to `profile.email` if you want it displayed.
- Replace any unverified internship dates or descriptions with confirmed details.

## 6. Production build

```bash
cd client
npm run build
npm run preview
```

## 7. Deployment
- Frontend: deploy `client` as a Vite project on Vercel. Set `VITE_API_URL` to your deployed API URL.
- Backend: deploy `server` to Render or another Node host. Set `MONGODB_URI`, `CLIENT_URL` (the deployed frontend origin), and `PORT` if required by the provider.
- Database: configure MongoDB Atlas network access and a least-privilege database user.
- Add your actual resume PDF to `client/public` before deployment.

## Checklist
- [ ] Resume PDF exists and opens
- [ ] Confirm all GitHub and live demo URLs
- [ ] Confirm internship dates and responsibilities
- [ ] Set `profile.email` if desired
- [ ] Configure MongoDB and backend environment variables
- [ ] Test valid and invalid contact form submissions
- [ ] Check responsive layout at mobile, tablet, and desktop sizes
- [ ] Test keyboard focus and reduced-motion preference
- [ ] Run `npm run build` and check browser/server logs


## Profile photo
Your uploaded portrait is saved as `client/public/abhinav-raskar.jpg` and displayed in the hero section. To change it, replace that image file while keeping the same filename.


## Resume-based profile updates
Profile data includes the supplied resume's email, CGPA (8.14/10), education dates, Bitmap Technology and Veracity internship details, project descriptions, and NPTEL DBMS Elite certification. Review all details before publishing.
