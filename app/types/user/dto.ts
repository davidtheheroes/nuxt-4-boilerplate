import type { CreateDto, UpdateDto } from '~/types/base'
import type { User } from './entity'

export type CreateUserDto = CreateDto<User>
export type UpdateUserDto = UpdateDto<User>
