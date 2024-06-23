import * as mongoose from 'mongoose'
import { Schema, Prop , SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type todoDoc = Todo & Document;

@Schema({collection: 'list'})
export class Todo {
 @Prop()
description: string;
@Prop()
 isCompleted: boolean;
}

export const todoSchema = SchemaFactory.createForClass(Todo)
