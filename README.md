# Dev-Games 🎮

A Next.js application for discovering and exploring awesome games! This project allows users to find new games, view detailed information about them, and manage a list of their favorite games. It leverages external APIs to fetch game data and provides a user-friendly interface for browsing and searching.

## 🚀 Key Features

- **Game of the Day:** Discover a featured game on the homepage. 🏆
- **Game Listing:** Browse a curated list of games to find something new. 🕹️
- **Search Functionality:** Easily search for games by title. 🔍
- **Game Details Page:** View detailed information about each game, including screenshots, descriptions, and genres. ℹ️
- **Favorite Games:** Save games to your profile for easy access. ❤️
- **Dynamic Metadata:** SEO-friendly metadata generated dynamically for each game page. 🌐
- **Responsive Design:** Works seamlessly on various devices. 📱💻

## 🛠️ Tech Stack

- **Frontend:**

  - [Next.js](https://nextjs.org/) - React framework for building performant web applications.
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static typing.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
  - [React Icons](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily.
  - [React Toastify](https://github.com/fkhadra/react-toastify) - Library for displaying toast notifications.
  - [Next/Image](https://nextjs.org/docs/api-reference/next/image) - Image optimization component.
  - [Next/Link](https://nextjs.org/docs/api-reference/next/link) - Link component for client-side navigation.

- **Backend/API Interaction:**

  - External Game API (Configured via environment variables)

- **Build Tools:**
  - npm

## 📦 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Kaua26323/Dev-Games
    cd dev-games
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Create a `.env.local` file in the root directory and add the following environment variables:

    ```
    NEXT_URL_API=<your_api_endpoint>
    NEXT_API_URL=<your_api_endpoint>
    ```

    Replace `<your_api_endpoint>` with the actual URL of the game API you want to use.

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 💻 Usage

Once the application is running, you can:

- Browse the homepage to see the "game of the day" and a list of games.
- Use the search bar to find specific games by title.
- Click on a game card to view its details page.
- Add games to your favorites on the game details page.
- View your favorite games on the profile page.

## 📂 Project Structure

```
dev-games/
├── .next/                     # Next.js build output
├── node_modules/             # npm dependencies
├── public/                   # Public assets (images, fonts, etc.)
│   └── user.png              # User profile image
├── src/                      # Source code
│   ├── app/                  # Next.js app directory
│   │   ├── game/             # Game related pages
│   │   │   ├── [id]/         # Dynamic game details page
│   │   │   │   ├── components/ # Game details components
│   │   │   │   │   ├── addToFavorites/ # Add to favorites component
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   └── label/        # Label component
│   │   │   │   │       └── index.tsx
│   │   │   │   └── page.tsx    # Game details page
│   │   │   ├── search/         # Search related pages
│   │   │   │   └── [title]/    # Dynamic search results page
│   │   │   │       └── page.tsx
│   │   ├── profile/          # User profile page
│   │   │   ├── components/ # Profile components
│   │   │   │   └── favoriteCard/ # Favorite card component
│   │   │   │       └── index.tsx
│   │   │   └── page.tsx        # Profile page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global CSS styles
│   ├── components/           # Reusable components
│   │   ├── container/        # Container component
│   │   ├── gameCard/         # Game card component
│   │   ├── input/            # Input component
│   ├── utils/                # Utility functions and types
│   │   └── types.ts          # Type definitions
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lockfile
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration
```

## 📸 Screenshots

📅 Projeto criado para estudos e prática pessoal
