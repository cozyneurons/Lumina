# Lumina EdTech Platform

**Lumina** is a modern, full-stack educational technology platform connecting students with high-quality tech courses and expert mentorship. Built with the **MERN Stack** (MongoDB, Express, React, Node.js), it features secure authentication, persistent enrollment tracking, and a responsive, premium user interface.

## 🚀 Key Features

*   **Secure Authentication**: Implemented **Google OAuth 2.0** with JWT (JSON Web Tokens) for secure, stateless user sessions.
*   **Course Management**: Dynamic course catalog with enrollment capabilities.
    *   **Free vs. Paid Logic**: Architecture supports differential access (Free "Full Stack" course vs. Paid premium courses).
    *   **Persistent State**: Enrollment status is stored in **MongoDB**, ensuring users practically "own" courses across sessions and devices.
*   **Interactive UI/UX**:
    *   Responsive design matching modern "Premium Dark Mode" aesthetics.
    *   **Animated Transitions**: Utilized **Framer Motion** for smooth page interactions and micro-animations.
    *   **Dynamic Syllabus**: Course content "unlocks" visually (changing icons/styles) upon enrollment.
*   **Production Architecture**:
    *   **Frontend**: Deployed on **Vercel** with environment-based configuration for API endpoints.
    *   **Backend**: RESTful API hosted on **Render**, utilizing **CORS** security policies to protect resources.

## 🛠️ Tech Stack

### Frontend
*   **React (v19)**: Core UI library utilizing Hooks (`useContext`, `useEffect`, `useState`) for state management.
*   **Vite**: Next-generation build tool for blazing fast development and optimized production builds.
*   **Framer Motion**: For production-grade animations and gesture feedback.
*   **React Router v7**: Client-side routing for SPA feel.
*   **Google OAuth**: Integrated via `@react-oauth/google`.

### Backend
*   **Node.js & Express**: Robust REST API handling user data, authentication, and course logic.
*   **MongoDB & Mongoose**: NoSQL database schema design or users and courses.
*   **JWT & Security**: Stateless authentication flow with secure HTTP headers and environment variable management.

## 🔧 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/lumina.git
    cd lumina
    ```

2.  **Install Dependencies**
    ```bash
    # Backend
    cd server
    npm install

    # Frontend
    cd ../client
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in `server/` and `client/`:
    *   **Server**: `MONGO_URI`, `JWT_SECRET`, `GOOGLE_CLIENT_ID`
    *   **Client**: `VITE_GOOGLE_CLIENT_ID`, `VITE_API_URL`

4.  **Run Locally**
    ```bash
    # Start Backend (Port 8000)
    cd server
    npm start

    # Start Frontend (Port 5173)
    cd client
    npm run dev
    ```

## 🌐 Live Demo

*   **Frontend**: [https://lumina-zeta-six.vercel.app](https://lumina-zeta-six.vercel.app)
*   **Backend API**: [https://lumina-2t60.onrender.com](https://lumina-2t60.onrender.com)
