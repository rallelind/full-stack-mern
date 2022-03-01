const express = require("express");
const router = express.Router()
const multer = require("multer");
const Product = require("../models/product");



let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

let upload = multer({ storage: storage }).single("file")

router.post("/uploadImage", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});

router.post("/uploadProduct", async (req, res) => {
    const product = new Product({
        user: req.body.user,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        images: req.body.images,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        fridge: req.body.fridge,
        stove: req.body.stove,
        kitchen: req.body.kitchen,
        shower: req.body.shower,
        waterTanks: req.body.waterTanks,
        waterSystem: req.body.waterSystem,
    })

    await product.save()
    res.send("product created")
});

router.post("/getProducts", (req, res) => {
    Product.find()
    .exec((err, products) => {
        if(err) return res.status(400).json({ success: false })
        res.status(200).json({ success: true, products })
    })
})

router.get("/getproduct/:id", (req, res) => {

    Product.findById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({result})
    })
})

router.delete("/deleteproduct/:id", (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          })
        }
      })
})


module.exports = router;