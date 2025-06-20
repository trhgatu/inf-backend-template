import 'module-alias/register';
import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { initSocketServer } from './socket'
import router from './routes/index.route'
import { connectMongoDB } from './config/database'
import log from '@common/logger';

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Routes
router(app)

// HTTP + Socket
const httpServer = createServer(app)
initSocketServer(httpServer)

// Start server
async function startServer() {
  await connectMongoDB()

  httpServer.listen(port, () => {
    log.info(`🚀 Server running at http://localhost:${port}`)
  })
}

startServer()
