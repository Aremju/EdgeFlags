# EdgeFlags

EdgeFlags is an open-source MVP for Edge-based Feature Flags - built with Next.js, TypeScript, and an admin UI. Includes a control plane, SDK, and demo app, supporting real-time rollouts, A/B testing, and secure API keys.

## ✨ Features

- ⚡ **Edge delivery** for instant flag evaluation
- 🛠 **Admin UI** to create, edit, and manage flags
- 📊 **A/B Testing** and gradual rollouts
- 🔑 Secure API key management
- 🔄 Real-time updates with minimal latency
- 📦 Lightweight SDK for integration into your apps

## 🏗 Tech Stack

- **Frontend:** Next.js 15, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes, Prisma, PostgreSQL
- **Edge:** Cloudflare Workers / Vercel Edge Functions
- **Auth:** JWT-based authentication

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/edgeflags
cd edgeflags

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 📚 How It Works

1. Admin UI lets you define and toggle feature flags.
2. Control Plane stores flag states in PostgreSQL.
3. Edge service caches flags for ultra-low-latency evaluation.
4. SDK fetches flag states and evaluates them in your app.

## 📸 Screenshots

tbd

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a PR.
