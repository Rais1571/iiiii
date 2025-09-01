const mongoose = require('mongoose');

let feedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  email: { type: String },
  role: { type: String, required: true },
  department: { type: String },
  visitTypes: [String],
  ratings: {
    teaching: Number,
    lab: Number,
    content: Number,
    assessment: Number,
    admin: Number,
    overall: Number
  },
  comments: {
    teaching: String,
    lab: String,
    content: String,
    assessment: String,
    admin: String,
    overall: String
  },
  detailedFeedback: { type: String, maxlength: 3000 },
  anonymous: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
