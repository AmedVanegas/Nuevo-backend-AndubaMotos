

// controller se encarga de manejar las peticiones y las respuestas de los clientes



import servicemodel from "../models/service.models.js";
import { dbGetServices, dbinsertService, dbdeleteservice } from "../services/service.service.js"





const  getServices = async(req,res) => {

    try {
       const data = await dbGetServices();
    
    res.json({
        msg:"obtener todos los servicios",
        data: data
    }) 
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener el listado de productos'
        });
        
    };
};




async function createServices(req,res){


    try {
        const inputData = req.body
        const createdService = await dbinsertService(inputData)

        res.status(201).json({
            createdService: createdService,
            
        })

        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "no se pudo crear el servicio"
        });
        
    }; 
}








function patchServices(req,res){

    res.json({
        msg:"editar usuarios"
    })
}









 const  deleteServices = async (req,res) => {

    try {
        const id = req.params.idservice

    const data = await dbdeleteservice(id);


    res.status(200).json({
        msg:"eliminar usuario",
        data: data
    });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'error: no se pudo eliminar el servicio'
        })
    }
}



export {
    getServices, createServices, deleteServices,patchServices
}
