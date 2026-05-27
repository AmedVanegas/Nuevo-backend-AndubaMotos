

// controller se encarga de manejar las peticiones y las respuestas de los clientes



import { dbGetServices, dbinsertService } from "../services/service.service.js"





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
        console.log(error)
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









function deleteServices(req,res){

    res.json({
        msg:"eliminar usuario"
    })
}



export {
    getServices, createServices, deleteServices,patchServices
}
