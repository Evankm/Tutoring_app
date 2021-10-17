const express = require('express')
const router = express.Router()
const appointment = require('../models/appointment')
const course = require('../models/course')

router.post('/', (req, res)=>{
    const post = new appointment({
        studentName: req.body.studentName,
        tutorName: req.body.tutorName,
        time: req.body.time,
        topic: req.body.topic,
        comment: req.body.comment
    })

    console.log(post.studentName);

    post.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})


router.get('/:courseId', (req, res) =>{

    course.findById(req.params.courseId).then(data=>{
        res.send(JSON.stringify(data));
    })
})

module.exports = router