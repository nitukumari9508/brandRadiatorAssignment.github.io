const express = require("express")
 const router = express.Router()
const contactController = require("../controller/contactController")
router.post("/contact" ,contactController.contactData)




router.get("/getContact" , contactController.getContactDetail)
 





 module.exports = router