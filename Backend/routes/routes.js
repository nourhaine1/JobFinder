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

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const record = await User.findOne({ email: email })
    if (record) {
        return res.status(400).send({
            message: "Email is already registered"
        })
    } else {

        const user = new User({
            name: name,
            email: email,
            //password: password
            password: hashedPassword
        })

        const result = await user.save()

        //JWT Token
        const { _id } = await result.toJSON()
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.json({
            //id:result._id
            //user: result
            message: "success"

        })
    }
})

router.post("/login", async(req, res) => {
    res.send("login user")
})

module.exports = router