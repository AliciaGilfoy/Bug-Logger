import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    closed: { type: Boolean, required: true },
    description: { type: String },
    title: { type: String, required: true },
    reportedBy: { type: String, required: true },
    closedDate: { type: Date, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;


