# ⚔️ `inf-backend-template` · Backend Starter for Modern Web Apps

[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=flat\&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?style=flat\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/docker-ready-blue?style=flat\&logo=docker)](https://www.docker.com/)
[![Swagger](https://img.shields.io/badge/Docs-Swagger-yellowgreen?style=flat\&logo=swagger)](#-api-documentation)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

> 🧹 A production-ready, modular backend template built with care – by **`trhgatu`** – for any serious project.  
> 🧠 Pre-configured Auth, RBAC, Logs, Upload, Realtime, CI, and more.

---

## 🚀 Features at a Glance

| Symbol | Feature |
|--------|---------|
| 🧽 | **Modular Architecture** – maintainable & scalable |
| 🔐 | **Auth (JWT)** – login, register, refresh, logout |
| 🛡️ | **RBAC** – roles, permissions & route guards |
| 📍 | **Audit Logs** – automatic admin action history |
| 💾 | **MongoDB (Mongoose)** – schema, model, typing |
| 🧠 | **Zod Validation** – strict DTO validation |
| ☁️ | **Supabase Uploads** – image/files storage |
| 🔌 | **Socket.IO** – real-time event system |
| 🔍 | **Swagger Docs** – auto-generated per module |
| 🐳 | **Dockerized** – ready for deployment |
| 📦 | **GitHub Actions CI** – lint, build, test on push |
| 🧪 | **ESLint v9** – strict typing, no `any`, no `console` |

---

## 📁 Project Structure

```
trhgatu-inf-backend-template/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env.example
├── tsconfig.json
└── src/
    ├── server.ts            # Entry point
    ├── app.ts               # App-level setup
    ├── config/              # DB, Redis, env configs
    ├── core/
    │   ├── middleware/      # Auth, logging, validation...
    │   ├── utils/           # Logger, jwt, response helpers
    │   └── types/           # Express type overrides
    ├── modules/             # Feature-first modules
    │   └── (auth, user, role, ...) with controller, service, dto
    ├── routes/              # Main router
    ├── shared/              # Enums, constants
    └── socket/              # Socket.IO gateway
```

---

## 🛠️ Getting Started

```bash
# 1. Clone
git clone https://github.com/trhgatu/inf-backend-template.git
cd inf-backend-template

# 2. Install deps
npm install

# 3. Setup environment
cp .env.example .env
```

---

## 👨‍💻 Development Mode

```bash
npm run dev
# Runs on http://localhost:3000
```

## 🏠 Production Build

```bash
npm run build && npm start
```

---

## 🐳 Dockerized Workflow

> ⚙️ Requires `Docker` and `docker-compose`.

```bash
docker-compose up -d --build
# Visit: http://localhost:3000
```

* MongoDB: exposed on port `27017`
* Backend: port `3000`
* Data volume persists MongoDB across reboots

---

## 🔐 Auth Flow (JWT)

* `POST /auth/register`
* `POST /auth/login`
* `GET /auth/me` (Protected)
* `POST /auth/refresh-token`
* `POST /auth/logout`

---

## 🧱 Key Modules

| Module         | Description                       |
| -------------- | --------------------------------- |
| `auth`         | JWT login/register + refresh flow |
| `user`         | User profile & status             |
| `role`         | Role CRUD + permission binding    |
| `permission`   | System-wide permission rules      |
| `log`          | Audit trail middleware            |
| `upload`       | Supabase file/image upload        |
| `socket`       | Real-time event system            |
| `__template__` | For generating new modules fast   |

---

## 📚 API Documentation

> Auto-generated Swagger UI

* 🧪 `http://localhost:3000/api-docs`

> Each module can define its own `swagger` spec & DTO

---

## 🔐 .env Variables

```env
PORT=3000
MONGODB_URI=mongodb://mongo:27017/inf-template
JWT_SECRET=your_secret

# Supabase
SUPABASE_URL=https://xyz.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_key
```

---

## 📦 Scripts

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start with ts-node-dev             |
| `npm run build`    | Compile to `/dist`                 |
| `npm start`        | Run production build               |
| `npm run seed`     | Seed database                      |
| `npm run generate` | Generate new module via CLI script |
| `npm run lint` | Run ESLint with strict config |
	
---

## ⚖️ License

MIT License © [@trhgatu](https://github.com/trhgatu) – use it, build on it, and make it your own.

---

🔥 **Build systems that reflect your soul.** This isn’t just a template – it’s your backend battleground.
Let’s craft something extraordinary.
