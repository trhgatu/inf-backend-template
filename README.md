# 🧱 inf-backend-template

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-ready-blue.svg?logo=docker&logoColor=white)](https://www.docker.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Supabase](https://img.shields.io/badge/Supabase-integrated-3FCF8E?logo=supabase&logoColor=white)](https://supabase.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A production-ready, modular, and scalable backend template using **Node.js + Express + TypeScript**.  
> Built with care by **trhgatu** 🛠️

---

### 📁 Directory Structure

```bash
trhgatu-inf-backend-template/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── package.json
├── tsconfig.json
└── src/
    ├── app.ts
    ├── server.ts
    ├── env.ts
    ├── config/
    ├── core/
    ├── modules/
    ├── routes/
    ├── scripts/
    ├── shared/
    └── socket/
```

---

### 🚀 Getting Started

#### 1. Clone repo & install dependencies

```bash
git clone https://github.com/trhgatu/inf-backend-template.git
cd inf-backend-template
npm install
```

#### 2. Setup environment variables

```bash
cp .env.example .env
```

Fill in all required fields including MongoDB URI and Supabase keys.

#### 3. Run in development

```bash
npm run dev
```

#### 4. Run with Docker

```bash
docker-compose up -d --build
```

---

### ⚙️ Features

- ✅ **Authentication** – Register, login, JWT, refresh token
- ✅ **Authorization** – RBAC with Role & Permission
- ✅ **Audit Logs** – Track all admin activities
- ✅ **File Upload** – Multer middleware integration
- ✅ **Realtime Layer** – Socket.IO based events
- ✅ **Validation** – Zod-based DTO validation
- ✅ **Modular** – Clean and reusable module architecture
- ✅ **Supabase** – Ready-to-use for image/file storage
- ✅ **Dockerized** – Production-ready with Compose support
- ✅ **CLI Tooling** – Module generator & DB seeder

---

### 🧪 Available Scripts

| Script           | Description                      |
|------------------|----------------------------------|
| `npm run dev`    | Run server in dev mode (TS-node) |
| `npm run build`  | Build the project into `dist/`   |
| `npm run start`  | Start compiled app (prod)        |
| `npm run seed`   | Run DB seeder                    |
| `npm run generate` | CLI module generator          |

---

### 📦 Built-in Modules

- `auth/` – Auth logic: login, register, JWT
- `user/` – User info, profile updates
- `role/`, `permission/` – RBAC system
- `log/` – Admin action log
- `upload/` – File uploading (Supabase)
- `test/` – Example module to extend
- `__template__/` – CLI-generated boilerplate

---

### 🧰 Dev Tools

- **Logger** with chalk and timestamp
- **Zod schema validation**
- **Express middleware stack**
- **Type-safe `express.Request.user`**
- **Centralized error handling**

---

### 🧑‍💻 Author

Maintained by **trhgatu**  
👉 Follow the journey [here](https://github.com/trhgatu)  

---

### 📚 License

Licensed under [MIT](./LICENSE).
