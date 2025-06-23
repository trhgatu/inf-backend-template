import mongoose, { Schema, Document } from 'mongoose'

export interface IRole extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  description?: string
  permissions: string[]
  createdAt: Date
  updatedAt: Date
  isDeleted?: boolean
}

const roleSchema: Schema<IRole> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    permissions: [{ type: String }],
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const Role = mongoose.model<IRole>('Role', roleSchema, 'roles')
export default Role
