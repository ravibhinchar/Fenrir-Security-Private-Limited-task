Fenrir Security Frontend Design Challenge

This project is my submission for the Frontend Design Challenge by Fenrir Security Private Limited.

I have recreated three screens from the provided design reference using React and TypeScript. The application supports both dark mode and light mode and is fully responsive for desktop and mobile screens.

Tech Stack :

React
TypeScript
Vite
React Router
Tailwind
ESLint

Screens Implemented :

Login / Sign-up Screen
Dashboard (Scan List Overview)
Active Scan Detail (Live Console and Finding Log)
All screens are implemented in both dark and light themes.

Features : 

Theme toggle (dark & light mode) working globally
Functional navigation between all three screens
Click on scan row opens Scan Detail page
Search and filter functionality on dashboard
Interactive buttons (New Scan, Stop Scan, etc.)
Tabs working in Live Console section

Reusable components for:

Severity badges (Critical, High, Medium, Low)
Status chips (Completed, Scheduled, Failed)
Buttons and input fields
Fully responsive layout (mobile and desktop)
Realistic mock data (no backend integration)

Project Structure :

src/
components → reusable UI components
pages → screen-level components (Login, Dashboard, Scan Detail)
data → mock JSON data
hooks → custom hooks 
styles → global styles / theme files
Getting Started

Clone the repository :

Run npm install
Run npm run dev
Open the local server URL shown in terminal

Deployment :

The application is deployed on Vercel / Netlify.
The live URL opens directly to the Login screen.

Notes :

This project uses mock data only.
No real backend or API integration is included.
The UI is built from scratch based strictly on the provided design reference.