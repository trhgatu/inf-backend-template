import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectMongoDB = async () => {
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI is not defined in .env file')

  await mongoose.connect(uri)
  console.log('✅ Connected to MongoDB')
}
