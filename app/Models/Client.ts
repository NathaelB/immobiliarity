import { DateTime } from 'luxon'
import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import {beforeCreate} from "@adonisjs/lucid/build/src/Orm/Decorators"
import Local from "./Local"
import { randomUUID } from "crypto"

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public nameContact: string

  @column()
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Local)
  public locals: HasMany<typeof Local>

  @beforeCreate()
  public static async generateUUID (model: Client) {
    model.id = randomUUID()
  }
}
