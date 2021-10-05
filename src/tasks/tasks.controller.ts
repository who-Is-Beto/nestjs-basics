import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDTO } from './DTO/createTask.dto';
import { TasksService } from './tasks.service';
import { ITask } from './types/interface';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<string> {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<string> {
    return this.tasksService.getTask(id);
  }

  @Post('/create')
  createTask(@Body() task: CreateTaskDTO): string {
    return `This action adds a new task ${task.title}`;
  }

  @Put('/update/:id')
  updateTask(@Body() task: CreateTaskDTO, @Param('id') id: string): string {
    return `Updating task ${task} ${id}`;
  }

  @Delete('/delete/:id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return 'This action deletes a task';
  }
}
