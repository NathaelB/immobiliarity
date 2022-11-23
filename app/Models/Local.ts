import { DateTime } from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import {beforeCreate} from "@adonisjs/lucid/build/src/Orm/Decorators";
import * as crypto from 'crypto'
import Client from "./Client";

export default class Local extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public clientId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @beforeCreate()
  public static async generateUUID (model: Local) {
    model.id = crypto.randomUUID()
  }
}
