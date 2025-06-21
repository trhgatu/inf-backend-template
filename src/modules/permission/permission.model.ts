import { Schema, model, Document } from 'mongoose'

export interface IPermission extends Document {
  name: string
  description?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const permissionSchema = new Schema<IPermission>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

const Permission = model<IPermission>('Permission', permissionSchema, 'permissions')
export default Permission
