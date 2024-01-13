import mongoose from "mongoose"

import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minLength: [6, "Your password must be longer than 6 charactors"]
    },
    avatar: {
        public_id: String,
        url: String,
      },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

export default mongoose.models.User || mongoose.model("User", userSchema)


