import express from 'express'
import * as userController from './user.controller'
import { requireAuth, validate } from '@middlewares'

import { UpdateProfileSchema } from './dtos'

const router = express.Router()

router.get('/me', requireAuth, userController.getMe)

router.put('/update/me', requireAuth, validate(UpdateProfileSchema), userController.updateMe)

router.get('/', requireAuth, userController.getAllUsers)

export default router
