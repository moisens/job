import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



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
    minLength: 6,
    select: false,
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
  //const salt = await bcrypt.genSalt(10)
  //this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function() {
  return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
  
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
  
}



const User = mongoose.model("User", UserSchema)

export default User;



