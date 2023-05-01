const model = require("../model/contactModel")
const contactData =  async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contactData = []
  contactDetail = await model.create({name,email,message});
      res.status(201).send({status:true,message:"successfully contact " , data:contactDetail});
      contactData.push(data);
   
    } catch (error) {
      console.log(error);
      res.status(500).send("Error saving contact form data");
    }
  }


  const getContactDetail = async (req, res) => {
    try {
        const contactDetail = await model.find();
        if (contactDetail) {
            res.status(200).json({ status: true, message: "successfully got the data", data: contactDetail })
        } else {
            res.status(400).json({ message: "data not found" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching contact form data");
    }
};

  module.exports={contactData, getContactDetail}