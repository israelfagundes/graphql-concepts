import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', Schema);