import mongoose, { Document, Schema } from "mongoose";

export interface PaymentDocument extends Document {
  userId: Schema.Types.ObjectId;
  billId: Schema.Types.ObjectId;
  assignedBillId: Schema.Types.ObjectId;
  status: string;
  reference: string;
  data?: {};
}

const PaymentSchema = new Schema<PaymentDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    billId: { type: Schema.Types.ObjectId, ref: "Bill", required: true },
    assignedBillId: { type: Schema.Types.ObjectId, ref: "AssignedBill", required: true },
    status: { type: String },
    reference: { type: String, required: true},
    data: { type: Object },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<PaymentDocument>(
  "Payment",
  PaymentSchema
);
