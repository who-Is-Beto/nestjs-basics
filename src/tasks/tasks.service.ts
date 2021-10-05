import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { taskDocument, Task } from './scheemas/task.scheema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<taskDocument>) {}
  public async getTasks(): Promise<Task[]> {
    try {
      console.log('getTasks', this.taskModel);
      return await this.taskModel.find();
    } catch (err) {
      console.log(err);
    }
  }

  public async getTask(id: string): Promise<Task> {
    return await this.taskModel.findById(id);
  }
}
