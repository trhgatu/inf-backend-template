// src/app.ts
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import mainRoutes from './routes/index.route'
import { errorHandler } from './core/middleware/error.middleware'

const app = express()

// Core middlewares
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Main route
app.use(mainRoutes)

// Global error handler
app.use(errorHandler)

export default app
