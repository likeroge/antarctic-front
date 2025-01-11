import type { Place } from './places'
import type { Vehicle } from './vehicles'

export type TransportNote = {
  id?: number
  fromId: number
  toId: string
  vehicleId: number
  atd?: Date
  ata?: Date
  date: Date
  rmk?: string
  pob?: number
  from: Place
  to: Place
  vehicle: Vehicle
}
