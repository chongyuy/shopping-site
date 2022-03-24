const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const ProductModel = require("./models/products")
const app = express()
app.use(express.json());
app.use(cors())
mongoose.connect(
    "mongodb+srv://chongyuy:ycy756724933@chongyu.r3rbq.mongodb.net/React-store?retryWrites=true&w=majority"
);
app.get("/getProducts", (req, res) =>{
    ProductModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.listen(3001, () =>{
    console.log("12312312")
})