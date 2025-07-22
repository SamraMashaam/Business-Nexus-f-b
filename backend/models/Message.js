import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
    required: true
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "senderModel",
    required: true
  },
  senderModel: {
    type: String,
    enum: ["Investor", "Entrepreneur"],
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "receiverModel",
    required: true
  },
  receiverModel: {
    type: String,
    enum: ["Investor", "Entrepreneur"],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});


const Message = mongoose.model("Message", messageSchema);
export default Message;
