import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo,todoSchema } from './entities/todo.entity';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports:[
    MongooseModule.forFeature([{name:Todo.name , schema:todoSchema}])
  ]
})
export class TodoModule {}
