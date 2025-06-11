
# BoToFood 🍔

A responsive web application for displaying and filtering food items, built with **Next.js** and styled using **CSS Modules**.

## ✨ Features

- Pages use SSR, SSG, ISR, and Static Generation methods.
- Filter food items by cooking time and difficulty.
- Dynamic routing with `getServerSideProps`, `getStaticProps`, `getStaticPaths`.
- Well-organized components:
  - `components/layout`, `components/modules`, `components/templates`
  - `pages`, `public`, `styles`


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sajjadafkhami/BoToFood.git
cd BoToFood
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the JSON Server (Local API)

```bash
npm run serve-json
# Available at http://localhost:4000/data
```

### 4. Run the development server

```bash
npm run dev
# Open http://localhost:3000 in your browser
```

### 5. Build and Start Production

```bash
npm run build
npm start
```

> Note: Make sure `json-server` is running before `npm start`.





