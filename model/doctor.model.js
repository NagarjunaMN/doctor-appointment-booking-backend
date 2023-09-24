const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      mobile: {
        type: String,
        required: true,
        unique: true
      },
      image: {
        type: Object,
        default: {
            url: "https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
        }
      },
      doctorId: {
        type: String,
        default: "user",
        enum: ["user", "doctor", "admin"]
      },
      
      department: {
        type: Object,
        default: {}
      },
      qualification: {
        type: Boolean,
        default: true
      },
      description:{},
      experiance: {},
      address: {}
},{
    collection: "doctors",
    timestamps: true
})

module.exports = mongoose.model("Doctor", doctorSchema)