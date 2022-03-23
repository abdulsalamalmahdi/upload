import {Products, Suppliers, Images } from "../models";

export {productController}



const addPRoduct=async (req, res)=>{
   const {files} = await req;
   const {id}= await req.body;
  
 const newImages= files.map(fl=>{
     Images.create({name:fl.filename, url:fl.path, product_id:id })
     .then(async dt=>{
     await Products.findAll({where:{id}}).then(async dt=>{
      await res.status(200).json(dt)
  }).catch(err=>res.send(err))

     })
     .catch(err=>err);

 });
    
}

const getProduct= async(req, res)=>{
    const {id}= req.params;
    res.send(id)
 }

 const getAllProducts= async(req, res)=>{
  await Products.findAll().then(dt=>res.status(200).json(dt)).catch(err=>res.send(err))
 }

const productController ={
addPRoduct,
getProduct,
getAllProducts
}


