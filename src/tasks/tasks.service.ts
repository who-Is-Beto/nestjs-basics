import { Injectable } from '@nestjs/common';
import { ITask } from './types/interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel('task') public taskModel: Model<ITask>) {}
  public async getTasks(): Promise<string> {
    console.log(this);
    return 'asjkdhskd';
  }

  public async getTask(id: string): Promise<string> {
    return 'aksjhdsajkdhska';
  }
}
