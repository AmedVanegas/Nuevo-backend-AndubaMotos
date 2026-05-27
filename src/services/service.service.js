import servicemodel from "../models/service.models.js";

const  dbinsertService = async(newService) => {
   return await servicemodel.create(newService);
    
}

 const dbGetServices = async ( ) => {
     return await servicemodel.find();

 }

 const dbdeleteservice = async (id) => {
    return await servicemodel.findOneAndDelete({_id: id})
    return await servicemodel.findByIdAndDelete({_id: id})
 }

 



export{
    dbinsertService,dbGetServices,dbdeleteservice
};