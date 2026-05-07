# Gaea WebUI - Frontend Documentation

## 📖 Overview
Gaea WebUI is a highly aesthetic, premium, and dynamic web application built with a modern React stack. The application is designed to deliver a sophisticated, editorial-grade user experience with smooth scrolling, magnetic interactions, cinematic text reveals, and parallax depth. 

The project uses Next.js (App Router), styled with Tailwind CSS, and powered by Redux Saga for predictable state management.

---

## 🛠 Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework using the App Router.
- **[React 19](https://react.dev/)** - Library for web and native user interfaces.
- **[TypeScript 5](https://www.typescriptlang.org/)** - Strongly typed programming language that builds on JavaScript.

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework.
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library for React.
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components for building high‑quality design systems.
- **[Lenis](https://lenis.studiofreight.com/)** - Lightweight smooth scrolling library.
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons.

### State Management & Data Fetching
- **[Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)** - State container.
- **[Redux Saga](https://redux-saga.js.org/)** - Side effect middleware for Redux.
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client for APIs.

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible, and extensible forms.
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation with static type inference.

---

## 📂 Project Structure

```text
gaea/gaeagold-webui/
├── app/
│   ├── (auth)/         # Authentication related routes (login, register)
│   ├── (protected)/    # Protected routes requiring user session
│   ├── (public)/       # Public routes (landing page, about, etc.)
│   ├── providers/      # Context providers (Redux, Theme, etc.)
│   ├── globals.css     # Global styles and Tailwind directives
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components (Hero, Footer, Carousel, etc.)
├── constants/          # Static app configuration and constant values
├── hooks/              # Custom React hooks
├── lib/                # Library configurations (Axios instances, utils)
├── public/             # Static assets (fonts, images, icons)
├── sagas/              # Redux Saga watcher and worker functions
├── stores/             # Redux slices and store configuration
├── utils/              # Helper utilities
└── Dockerfile          # Docker configuration for deployment
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en) (v20+ recommended)
- [npm](https://www.npmjs.com/) (v10+ recommended)

### Installation
1. Navigate to the project directory:
   ```bash
   cd gaeagold-webui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by copying the example file:
   ```bash
   cp .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   *The app will be available at [http://localhost:3000](http://localhost:3000).*

---

## 🔗 Connecting to the Backend

The frontend uses **Axios** combined with **Redux Saga** to communicate with your backend APIs.

### 1. Configure the API Base URL
In your `.env.local` file, add your backend API URL:
```env
NEXT_PUBLIC_API_URL=https://api.yourbackend.com/v1
```

### 2. Setup the Axios Instance (`lib/axios.ts`)
Create or configure an Axios instance to automatically attach tokens and handle base URLs:
```typescript
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to inject Auth tokens
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken'); // Or use a secure cookie strategy
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### 3. Implement Redux Saga for Async Actions
**Slice (`stores/userSlice.ts`)**
```typescript
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  reducers: {
    fetchUserRequest: (state) => { state.loading = true; },
    fetchUserSuccess: (state, action) => { state.loading = false; state.data = action.payload; },
    fetchUserFailure: (state, action) => { state.loading = false; state.error = action.payload; },
  }
});
export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;
```

**Saga (`sagas/userSaga.ts`)**
```typescript
import { call, put, takeLatest } from 'redux-saga/effects';
import { apiClient } from '@/lib/axios';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '@/stores/userSlice';

function* fetchUserWorker() {
  try {
    const response = yield call(apiClient.get, '/users/me');
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* userWatcherSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUserWorker);
}
```

---

## 🚢 Deployment

You can deploy the application using modern serverless platforms like Vercel, or containerize it using Docker for AWS, GCP, or generic VPS hosting.

### Option A: Deploying on Vercel (Recommended)
Next.js applications are optimized for Vercel out of the box.
1. Push your repository to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your Git repository.
4. Set the Framework Preset to **Next.js**.
5. Add your Environment Variables (e.g., `NEXT_PUBLIC_API_URL`).
6. Click **Deploy**.

### Option B: Deploying with Docker
The repository includes a `Dockerfile` for containerized deployments.

1. **Build the Docker Image:**
   ```bash
   docker build -t gaea-webui .
   ```
2. **Run the Docker Container:**
   ```bash
   docker run -p 3000:3000 --env-file .env.local gaea-webui
   ```

*You can now deploy this Docker image to services like AWS ECS, Google Cloud Run, or your own VPS managed by tools like Coolify/CapRover.*
