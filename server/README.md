# Fixyland Hotel & Resort - Backend API

A robust Node.js + Express + TypeScript backend with PostgreSQL database.

## 🚀 Features

- ✅ TypeScript for type safety
- ✅ Express.js framework
- ✅ PostgreSQL database with connection pooling
- ✅ Environment-based configuration
- ✅ Error handling middleware
- ✅ Request logging with Winston
- ✅ Rate limiting
- ✅ CORS support
- ✅ Security headers with Helmet
- ✅ Response compression
- ✅ Clean architecture (routes, controllers, utils, middlewares)

## 📁 Project Structure

```
server/
├── src/
│   ├── config/           # Configuration files
│   │   ├── database.ts   # PostgreSQL connection
│   │   └── env.ts        # Environment variables
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Express middlewares
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript types
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server entry point
├── logs/                # Application logs
├── .env                 # Environment variables
├── .env.example         # Environment template
├── package.json
└── tsconfig.json
```

## 🛠️ Setup

### Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 14.x
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update database credentials in `.env`

3. **Setup PostgreSQL:**
   - Create database:
     ```sql
     CREATE DATABASE fixyland_db;
     ```
   - Update `.env` with your PostgreSQL credentials

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 🌐 API Endpoints

### Health Check
- `GET /` - API info
- `GET /api/v1/health` - Server health
- `GET /api/v1/health/db` - Database health

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment | development |
| `PORT` | Server port | 5000 |
| `DB_HOST` | PostgreSQL host | localhost |
| `DB_PORT` | PostgreSQL port | 5432 |
| `DB_NAME` | Database name | fixyland_db |
| `DB_USER` | Database user | postgres |
| `DB_PASSWORD` | Database password | - |
| `CORS_ORIGIN` | Allowed origin | http://localhost:3000 |

## 🔧 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production server
- `npm run lint` - Lint code

## 📦 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **Logger:** Winston
- **Security:** Helmet, CORS
- **Dev Tools:** Nodemon, TS-Node

## 🚦 Testing API

```bash
# Health check
curl http://localhost:5000/api/v1/health

# Database health
curl http://localhost:5000/api/v1/health/db
```

## 📄 License

ISC
