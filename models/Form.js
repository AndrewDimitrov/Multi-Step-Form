import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  yearly: {
    type: Boolean,
    default: false,
  },
  selectedPlan: {
    type: String,
    enum: ["arcade", "advanced", "pro"],
    default: "arcade",
  },
  firstAdd: {
    type: Boolean,
    default: false,
  },
  secondAdd: {
    type: Boolean,
    default: false,
  },
  thirdAdd: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Form || mongoose.model("Form", FormSchema);
