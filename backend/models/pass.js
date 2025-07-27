import mongoose from 'mongoose';
await mongoose.connect('mongodb://localhost:27017/passwordManager');
const PassSchema = new mongoose.Schema({
  url: String,
  username: String,
  password: String
});
export const Pass = mongoose.model('Pass', PassSchema);