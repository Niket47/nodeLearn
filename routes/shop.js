const express = require("express")
const path = require("path")
const router = express.Router()


const adminRoutes = require("./admin")


router.get("/", (req, res, next) => {
    console.log(adminRoutes.products, "-shoproutes")
    res.sendFile(path.join(__dirname, "..", "views", "shop.html"))
})


module.exports = router