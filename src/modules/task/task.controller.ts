import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './task.service'; // Make sure the filename matches
import { Task } from './task.entity'; // Optional: for typing if needed

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findTaskById(@Param('id') id: string) {
    return this.tasksService.findOne(Number(id));
  }

  @Post()
  createTask(@Body() taskData: Partial<Task>) {
    return this.tasksService.create(taskData);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateData: Partial<Task>) {
    return this.tasksService.update(Number(id), updateData);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.remove(Number(id));
  }
}
