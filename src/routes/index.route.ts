// src/routes/index.route.ts
import { Router } from 'express'
import templateRoutes from '@modules/__template__/__template__.route'
import testRoutes from '@modules/test/test.route'

const router = Router()

router.use('/templates', templateRoutes)
router.use('/tests', testRoutes)

router.get('/health', (_, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Infinity Backend Template is running 🚀',
  })
})

export default router
