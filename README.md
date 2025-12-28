# AI-Enhanced Portfolio

A modern, full-stack personal portfolio application built with the MERN stack. Features a corporate-grade design, real-time analytics, and an integrated AI assistant powered by OpenAI GPT-4.

## Features

- **Dynamic Project Showcase**: Fetch projects from MongoDB with live GitHub statistics (Stars, Forks, Languages).
- **AI Portfolio Assistant**: A context-aware chat widget that answers questions about the developer's skills and experience.
- **Real-time Analytics**: Visualized visitor trends and project impact metrics using Recharts.
- **Responsive Design**: Built with React, Vite, and Tailwind CSS for a premium dark-mode aesthetic.
- **Robust Backend**: Node.js/Express server with rate limiting, caching, and security headers.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Recharts.
- **Backend**: Node.js, Express, MongoDB (Mongoose), OpenAI API.
- **Tools**: GitHub API, Axios, Helmet, Morgan.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB
- OpenAI API Key (optional, for Chat)
- GitHub Personal Access Token (optional, for Repo Stats)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
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

3.  **Environment Setup**
    - Copy `server/.env.example` to `server/.env` and update variable values.

4.  **Run Development Servers**
    ```bash
    # Terminal 1 (Backend)
    cd server
    npm run dev

    # Terminal 2 (Frontend)
    cd client
    npm run dev
    ```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

## License

MIT
