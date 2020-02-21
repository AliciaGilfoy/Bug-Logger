import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async getNotesByBugId(id) {
    return await _repository.find({ "bugId": id })
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
}

const noteService = new NoteService();
export default noteService;