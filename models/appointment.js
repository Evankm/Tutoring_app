const mongoose = require('mongoose')

const postAppointment = mongoose.Schema({
    studentName: String,
    tutorName: String,
    time: String,
    topic: String,
    comment: String
})

module.exports = mongoose.model('appointments', postAppointment)