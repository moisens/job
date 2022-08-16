import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"



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

UserSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})



const User = mongoose.model("User", UserSchema)

export default User;



