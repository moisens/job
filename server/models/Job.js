import mongoose from "mongoose";



const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please provide a company name"],
    maxLength: 50,
  },
  position: {
    type: String,
    required: [true, "Please provide a position"],
    maxLength: 100,
  },
  status: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
  },
  jobType: {
    type: String,
    enum: ["full-time", "part-time", "remote", "internship"],
    default: "full-time",
  },
  jobLocation: {
    type: String,
    default: "Brussels",
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
}, {timestamps: true})


const Job = mongoose.model("Job", JobSchema)
export default Job;



