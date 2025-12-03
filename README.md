# Simple User Dashboard (Next.js + Sass + Tailwind)

This is a small dashboard project built with **Next.js**, **Sass**, and **Tailwind CSS**.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MohamedZakareia2/User-Dashboard.git


  Navigate to the project folder:

  cd dashboard-task



Install dependencies:

npm install
# or
yarn install
# or
pnpm install



Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev


Open your browser and go to http://localhost:3000
 to see the dashboard.


dashboard-task/
├─ src/
│  ├─ pages/
│  │  ├─ _app.tsx           # App wrapper
│  │  ├─ index.tsx          # Login page
│  │  ├─ dashboard.tsx      # Dashboard page
│  │  └─ user/[id].tsx      # User details page
│  ├─ styles/
│  │  ├─ globals.scss       # Global styles
│  │  ├─ login.scss         # Login page styles
│  │  ├─ dashboard.scss     # Dashboard page styles
│  │  └─ user.scss          # User page styles
│  └─ components/           # Optional components like ProtectedRoute, Table, Pagination
├─ package.json
├─ tailwind.config.js
├─ next.config.js
└─ README.md


Features

Login page (fake authentication)

Dashboard page:

Table of users fetched from JSONPlaceholder API

Search users by name

Pagination (5 users per page)

View button linking to user details

User details page:

Displays Name, Username, Email, Phone, Company, Website

Read-only

Responsive UI built with Sass and Tailwind

TypeScript for type safety and better developer experience
