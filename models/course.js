const mongoose = require('mongoose')

const courseSchema =  mongoose.Schema({
    course: String,
    tutors: [{
        availability: [String]
    }]
})

module.exports = mongoose.model('courseInformations', courseSchema)