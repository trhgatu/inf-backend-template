import { UserPayload } from "@modules/user/user.model"

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload
    }
  }
}
