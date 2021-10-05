import { Schema } from 'mongoose';

export const taskScheema = new Schema({
  title: String,
  description: String,
  done: Boolean,
});
