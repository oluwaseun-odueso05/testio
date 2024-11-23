import { Schema, model, Document } from 'mongoose';

export interface ICourse extends Document {
  title?: string;
  objective?: string;
  price?: number;
  instructorId?: string;
  organisationId?: string;
  lessonFormat?: string;
  learnerIds?: string[];
  duration?: string;
  courseCode?: string;
  courseLevel?: string;
  startDate?: Date;
  endDate?: Date;
  numberOfHoursPerDay?: number;
  numberOfDaysPerWeek?: number;
  cost?: number;
  promo?: string;
  promoCode?: string;
  promoValue?: number;
  platformCharge?: number;
  actualCost?: number;
  sharing?: string;
  sharingValue?: number;
  paymentStartDate?: Date;
  paymentEndDate?: Date;
  paymentStartTime?: string;
  paymentEndTime?: string;
  curriculum?: string[];
  teachingMethod?: string;
  passMark: number;
  maximumNumberOfTrials?: number
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: false },
  objective: { type: String, required: false },
  price: { type: Number, required: false },
  instructorId: { type: String, required: false },
  organisationId: { type: String, required: false },
  lessonFormat: { type: String, required: false },
  learnerIds: [{ type: String }],
  duration: { type: String, required: false },
  courseCode: { type: String, required: false },
  courseLevel: { type: String, required: false },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  numberOfHoursPerDay: { type: Number, required: false },
  numberOfDaysPerWeek: { type: Number, required: false },
  cost: { type: Number, required: false },
  promo: { type: String },
  promoCode: { type: String },
  promoValue: { type: Number },
  platformCharge: { type: Number },
  actualCost: { type: Number },
  sharing: { type: String },
  sharingValue: { type: Number },
  paymentStartDate: { type: Date },
  paymentEndDate: { type: Date },
  paymentStartTime: { type: String },
  paymentEndTime: { type: String },
  curriculum: [{ type: String }],
  teachingMethod: { type: String },
  passMark: {type: Number, required: false},
  maximumNumberOfTrials: {type: Number, required: false}
});

const Course = model<ICourse>('Course', CourseSchema);
export default Course
