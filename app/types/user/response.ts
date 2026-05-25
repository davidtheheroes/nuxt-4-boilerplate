import type { ListResponse, SingleResponse } from '~/types/base'
import type { User, UserRole, UserStatus } from './entity'

export type UserDetailResponse = SingleResponse<User>
export type UserListResponse = ListResponse<User>

export type UserListItem = Pick<User, 'id' | 'name' | 'email' | 'role' | 'status' | 'avatar'>

export interface UserQueryParams {
  page?: number
  perPage?: number
  search?: string
  role?: UserRole
  status?: UserStatus
  sortBy?: 'name' | 'email' | 'created_at'
  order?: 'asc' | 'desc'
}
