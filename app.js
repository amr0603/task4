require("dotenv").config();

const express =require("express");
 const app= express();
 const port=3005;


const mongoose =require("mongoose");
app.use(express.json());
const bcrypt =require("bcrypt");
const product = require("./models/Product");


async function connectionDB() {

   try {
      await mongoose.connect(process.env.DB_URL)
      console.log("conection DB")
   } catch (error) {
      console.log("error",error.Message)
   }
   
}connectionDB();

app.post("./product",async(req ,res)=>{
   try {
      //  get data
      const {name,category,price}=req.body;

       // vaildate data
      if(!name||!category||!price) return res.status(400).json({msg:"All fields are required"});
      
      const newproduct=await Product.create({
         name,category,price
      });


      
      res.status(200).json({
         msg:"succssful",
         data:product,
       });
   } catch (error) {
        console.log("error",error.Message)
         res.status(500).json({msg:"server error"})
   }
});

app.get("./product",async(req ,res)=>{
try {
   const Product= await Product.find(req.query);   
   res.status(200).json({
      msg:"success",
      data:product,
      });
} catch (error) {
     console.log("error",error.Message)
}


   });



 app.listen(port,()=>{
    console.log("srver rinning un port 3004");
   

 });