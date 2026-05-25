import { uuidv7 } from 'uuidv7'
import type { ID, ISODate } from '~/types/base'

// Auto-imported toàn project — dùng trực tiếp không cần import
export function generateId(): ID {
  return uuidv7()
}

export function nowISO(): ISODate {
  return new Date().toISOString()
}
