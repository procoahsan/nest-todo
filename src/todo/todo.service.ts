import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, todoDoc } from './entities/todo.entity';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private readonly model: Model<todoDoc>
  ){}

  async create(createTodoDto: CreateTodoDto): Promise<todoDoc> {
    const newTodo = new this.model(createTodoDto);
    return newTodo.save();
  }

  async findAll(): Promise<todoDoc[]> {
    return this.model.find().exec();
  }
}

// async findOne(id: string): Promise<todoDoc> {
//     const todo = await this.model.findById(id).exec();
//     if (!todo) {
//       throw new NotFoundException(`Todo with id ${id} not found`);
//     }
//     return todo;
//   }

//   async update(id: string, updateTodoDto: UpdateTodoDto): Promise<todoDoc> {
//     const updatedTodo = await this.model.findByIdAndUpdate(id, updateTodoDto, {
//       new: true,
//     }).exec();
//     if (!updatedTodo) {
//       throw new NotFoundException(`Todo with id ${id} not found`);
//     }
//     return updatedTodo;
//   }

//   async remove(id: string): Promise<todoDoc> {
//     const deletedTodo = await this.model.findByIdAndDelete(id).exec();
//     if (!deletedTodo) {
//       throw new NotFoundException(`Todo with id ${id} not found`);
//     }
//     return deletedTodo;
//   }
// }
