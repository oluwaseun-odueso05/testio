import mongoose, { Document, Schema } from 'mongoose';

export interface lessonDocument extends Document {
  courseId: mongoose.Types.ObjectId;
  title: string;
  objectives: string;
  link?: string;
  files?: string[];
  completedBy: mongoose.Types.ObjectId[];
}

const lessonSchema = new Schema<lessonDocument>(
  {
    courseId: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    objectives: { type: String, required: true },
    link: { type: String }, 
    files: { type: [String] }, 
    completedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<lessonDocument>('lesson', lessonSchema);
