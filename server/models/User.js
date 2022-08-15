import mongoose from "mongoose";
import validator from "validator";



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide a name!"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Provide an email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please Provide a valid email"
    }
  },
  password: {
    type: String,
    required: [true, "Provide a password"],
    minLength: 6
  },
  lastName: {
    type: String,
    maxLength: 20,
    default: "last name", 
  },
  location: {
    type: String,
    maxLength: 20,
    default: "Brussels"
  }
})

const User = mongoose.model("User", UserSchema)

export default User;



