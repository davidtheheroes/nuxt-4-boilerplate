import type { IEntity } from '~/types/base'

export type UserRole = 'admin' | 'user'
export type UserStatus = 'active' | 'inactive' | 'banned'

export interface User extends IEntity {
  name: string
  email: string
  role: UserRole
  status: UserStatus
  avatar?: string
}
