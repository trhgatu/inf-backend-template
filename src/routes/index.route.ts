// src/routes/index.route.ts
import { Router } from 'express'
import templateRoutes from '@modules/__template__/__template__.route'
import testRoutes from '@modules/test/test.route'

//auth route
import authRoutes from '@modules/auth/auth.route'

//user route
import userRoutes from '@modules/user/user.route'

//role route
import roleRoutes from '@modules/role/role.route'

const router = Router()

router.use('/templates', templateRoutes)
router.use('/tests', testRoutes)

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/roles', roleRoutes)

export default router
