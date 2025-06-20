import { IUser } from '@/models/User'

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: string
        roleId?: string
        email: string
        fullName: string
        status: string
      }
    }
  }
}
