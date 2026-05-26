// controller se encarga de manejar las peticiones y las respuestas de los clientes

import { dbGetServices, insertService } from "../services/service.service.js"

function getServices(req,res){

    res.json({
        msg:"listar todos los usuarios"
    })
}






function patchServices(req,res){

    res.json({
        msg:"editar usuarios"
    })
}




async function createServices(req,res){

    const data = await dbGetServices();

    try {
        const inputData = req.body
        const createdService = await insertService(inputData)

        res.status(201).json({
            createdService: createdService,
             data: data
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "no se pudo crear el servicio"
        });
        
    }; 
}






function deleteServices(req,res){

    res.json({
        msg:"eliminar usuario"
    })
}



export {
    getServices, createServices, deleteServices,patchServices
}
