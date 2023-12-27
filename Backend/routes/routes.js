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
    //res.send("login user")
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(404).send({
            message: "User Not Found"
        })
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).send({
            message: "Password Is Invalid"
        })
    }

    const token = jwt.sign({ _id: user._id }, "secret key")

    res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // for 1 day
    })

    res.send({
        message: "success"
    })
})

router.post("/user", async(req, res) => {
    //res.send("user")
    try {
        const cookie = req.cookies['jwt']
        const claims = jwt.verify(cookie, "secret")
        if (!claims) {
            return res.status(401).send({
                message: "unauthenticated"
            })
        }

        const user = await User.findOne({ _id: claims._id })
        const { password, ...data } = await user.toJSON()
        res.send(data)

    } catch (err) {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})

router.post('/logout', (req, res) => {
    res.cookie("jwt", "", { maxAge: 0 })

    res.send({
        message: "success"
    })
})

module.exports = router