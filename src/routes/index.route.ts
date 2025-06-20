// src/routes/index.route.ts
import { Router } from 'express'
import templateRoutes from '@modules/__template__/__template__.route'
import testRoutes from '@modules/test/test.route'

//auth route
import authRoutes from '@modules/auth/auth.route'

const router = Router()

router.use('/templates', templateRoutes)
router.use('/tests', testRoutes)
router.use('/auth', authRoutes)

export default router
