
import { from } from "rxjs"
import { Products, Suppliers } from "../models" ;

export {supplierController}



const addSupplier= ()=>{

}

const getAllSuppliers=async(req, res)=>{

     const pros = await Products.findAll().then(dt=>{
        return dt
    }).catch(err=>err)
 const sing_sub=   pros.map( async pr=>{
        const subs= await Suppliers.findAll({where:{
        product_id: pr.id
   }}).then(async rs=>{
 
    res.status(200).json({rs,pros})
  return rs

    }).catch(err => res.send(err))

    })
   
   

    // res.status(200).json({sing_sub,pros})
}


const supplierController ={
addSupplier,
getAllSuppliers
}
