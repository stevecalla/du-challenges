const { Schema, Types } = require('mongoose');

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 25,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
    }
    // reactions: 
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Initialize our Thoughts model
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
