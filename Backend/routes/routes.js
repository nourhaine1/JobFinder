const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const router = Router()

router.post('register', async(req, res) => {
    //res.send("created user")
    let email = req.body.email
    let password = req.body.password
    let name = raq.body.name

    const user = new User({
        name: name,
        email: email,
        password: password
    })

    const result = await user.save()
    res.json({
        //id:result._id
        user: result

    })
})

router.post("/login", async(req, res) => {
    res.send("login user")
})

module.exports = router