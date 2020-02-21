import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);
let date = new Date()

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    let bug = await _repository.findById(id)
    if (bug.closed) {
      return ("This bug is closed you can not edit it!")
    } else {
      return await _repository.findByIdAndUpdate(id, update, { new: true })
    }
  }
  async delete(id) {
    let bug = await _repository.find(id)
    if (!bug.closed) {
      bug.closed = true
      bug.closedDate = date.getDate()
    } else {
      return ("This bug is closed, fix the next bug please!")
    }

  }
}

const bugService = new BugService();
export default bugService;