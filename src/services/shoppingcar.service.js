import shoppingcarmodel from "../models/shoppingcar.models.js";

const  dbinsertShoppingcar = async(newService) => {
   return await shoppingcarmodel.create(newService); 
}

const dbGetShoppingcar = async ( ) => {
     return await shoppingcarmodel.find();

 }

 const dbdeleteShoppingcar = async (id) => {
   // return await shoppingcarmodel.findOneAndDelete({_id: id})
   return await shoppingcarmodel.findByIdAndDelete( id )
 }


const dbpatchShoppingcar = async (id, inputData)=> {
    return await shoppingcarmodel.findOneAndUpdate({_id: id},
         inputData, {new: true})
 }

 const dbGetShoppingcarByid = async (id) => {
   return await shoppingcarmodel.findOne({_id: id})
 }

 export{
    dbinsertShoppingcar, dbGetShoppingcar, dbdeleteShoppingcar, dbpatchShoppingcar, dbGetShoppingcarByid
};