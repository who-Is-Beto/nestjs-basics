import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { taskDocument, task } from './scheemas/task.scheema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(task.name) private taskModel: Model<taskDocument>) {}
  public async getTasks(): Promise<task[]> {
    return await this.taskModel.find();
  }

  public async getTask(id: string): Promise<task> {
    return await this.taskModel.findById(id);
  }
}
