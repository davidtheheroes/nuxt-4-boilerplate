import type { IBaseEntity, ID, Nullable } from './base'

export type AuditAction =
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE'
  | 'HARD_DELETE'
  | 'RESTORE'
  | 'LOGIN'
  | 'EXPORT'

export interface AuditLog extends IBaseEntity {
  userId: ID
  userEmail: string
  action: AuditAction
  entityType: string // 'User', 'Post', ...
  entityId: ID
  before: Nullable<Record<string, unknown>> // snapshot before change
  after: Nullable<Record<string, unknown>> // snapshot after change
  ipAddress: Nullable<string>
  userAgent: Nullable<string>
  metadata?: Record<string, unknown>
}

export type CreateAuditLogDto = Omit<AuditLog, 'id' | 'createdAt' | 'updatedAt'>
