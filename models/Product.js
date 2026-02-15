const { default: mongoose, model } = require("mongoose")

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
         type:String,
        required:true,
    },
    price:{
        type:Number,
    },
},{timestamps:true});

const product= mongoose.model("product",productSchema);
 
module.exports=product;
