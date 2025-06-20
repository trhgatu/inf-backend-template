import { Express } from 'express'
// import authRoutes from '@modules/auth/auth.route'
// import userRoutes from '@modules/user/user.route'

const router = (app: Express) => {
  const version = '/api/v1'

  // Register routes here
  // app.use(version + '/auth', authRoutes)
  // app.use(version + '/users', userRoutes)

  // Health check
  app.get(version + '/health', (_, res) => {
    res.status(200).json({
      status: 'ok',
      message: 'Infinity Backend Template is running 🚀',
    })
  })
}

export default router
