// Primitives
export type ID = string
export type ISODate = string
export type Nullable<T> = T | null
export type Maybe<T> = T | null | undefined

// Base Entity
export interface IBaseEntity {
  readonly id: ID
  readonly createdAt: ISODate
  readonly updatedAt: ISODate
}

// Tracked
export interface ITrackedEntity extends IBaseEntity {
  readonly createdBy: ID
  readonly updatedBy: ID
}

// Soft delete
export interface ISoftDeletable {
  deletedAt: Nullable<ISODate>
  deletedBy: Nullable<ID>
}

export type IEntity = ITrackedEntity & ISoftDeletable

// Actor
export interface ActorContext {
  userId: ID
  email: string
  ipAddress?: string
  userAgent?: string
}

// API Response
export interface ApiMeta {
  total: number
  page: number
  perPage: number
  totalPages: number
}

export interface ApiResponse<T> {
  data: T
  meta?: ApiMeta
  message?: string
}

export type ListResponse<T> = ApiResponse<T[]>
export type SingleResponse<T> = ApiResponse<T>

// Query Params
export interface QueryParams {
  page?: number
  perPage?: number
  search?: string
  sortBy?: string
  order?: 'asc' | 'desc'
  includeDeleted?: boolean
  [key: string]: unknown
}

// DTO helpers
type OmitAuto<T> = Omit<
  T,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy' | 'deletedAt' | 'deletedBy'
>

export type CreateDto<T> = OmitAuto<T> // Create new: just need data fields
export type UpdateDto<T> = Partial<OmitAuto<T>> // Update: partial (just send only field need to update)
