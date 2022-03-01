const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/product")
const session = require("express-session");
const user = require("../models/user");



router.use(passport.initialize());
router.use(passport.session());
require("../helpers/passportConfig.js")(passport);


router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user)
            })
        }
    })(req, res, next);
})

router.post("/register", (req, res) => {
    User.findOne({username: req.body.username}, async (err, doc) => {
        if (err) throw err;
        if(doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    })
})


router.get("/user", (req, res) => {
    res.send(req.user);
})

router.get("/profile/product", async (req, res) => {
    const userProduct = await Product.find({ user: req.user._id })

    res.status(200).json({userProduct})
})

module.exports = router;