import User from '@modules/user/user.model'
import { AppError } from '@common'
import { UpdateProfileDto } from './dtos'

export const getMe = async (userId: string) => {
  const user = await User.findOne({ _id: userId, isDeleted: false }).select('-password')
  if (!user) throw new AppError('User not found', 404)
  return user
}

export const updateMe = async (userId: string, payload: UpdateProfileDto) => {
  const user = await User.findOneAndUpdate(
    { _id: userId, isDeleted: false },
    payload,
    { new: true }
  ).select('-password')
  if (!user) throw new AppError('User not found', 404)
  return user
}

export const getAllUsers = async () => {
  return User.find({ isDeleted: false }).select('-password')
}
