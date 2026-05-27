import servicemodel from "../models/service.models.js";

const  dbinsertService = async(newService) => {
   return await servicemodel.create(newService);
    
}

 const dbGetServices = async ( ) => {
     return await servicemodel.find();
 }




export{
    dbinsertService,dbGetServices
};