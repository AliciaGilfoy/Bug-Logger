import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Note = new Schema(
  {
    bug: { type: ObjectId, ref: "Bug", },
    content: { type: String, required: true },
    reportedBy: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;