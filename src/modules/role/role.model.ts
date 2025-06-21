import mongoose, { Schema, Document } from 'mongoose'

export interface IRole extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  description?: string
  permissions: string[]
  createdAt: Date
  updatedAt: Date
}

const roleSchema: Schema<IRole> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    permissions: [{ type: String }],
  },
  { timestamps: true }
)

const Role = mongoose.model<IRole>('Role', roleSchema, 'roles')
export default Role
