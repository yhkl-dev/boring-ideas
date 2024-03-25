// models/Idea.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IIdea extends Document {
  title: string;
  description: string;
}

const IdeaSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Idea: Model<IIdea> = mongoose.models.Idea || mongoose.model<IIdea>('Idea', IdeaSchema);