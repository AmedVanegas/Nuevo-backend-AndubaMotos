import { registerMotorcycle } from "../services/motorcycle.services.js"

function getMc (req,res){

    res.json({
        msg:'lista motocicletas'
    })

}
function patchMc (req,res){

    res.json({
        msg:'actualizar motocicletas'
    })

}
async function createMc (req,res){

    try {

        const inputData = req.body

        const data = await registerMotorcycle(inputData)

        res.status(201).json({
            msg:'moto registrada',
            data:data
        })


        
    } catch (error) {
        console.log(error)

        res.status(501).json({
            msg:'no se pudo registrar la moto'
        })

        
    }

}
function deleteMc (req,res){

    res.json({
        msg:'eliminar motocicletas'
    })

}

export {getMc,patchMc,createMc,deleteMc}