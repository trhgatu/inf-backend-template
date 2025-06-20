import { Express } from 'express'
// import authRoutes from '@modules/auth/auth.route'
// import userRoutes from '@modules/user/user.route'
import templateRoutes from '@modules/__template__/__template__.route'

const router = (app: Express) => {
  const version = '/api/v1'
  app.use(version + '/templates', templateRoutes);
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
