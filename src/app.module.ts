import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ScheduleModule} from '@nestjs/schedule';

@Module({
  imports: [
    TodoModule,
    UsersModule,
    ScheduleModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://mahsannadeem15:hello14@cluster0.q40hnjk.mongodb.net/",{
      dbName:"todo"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
