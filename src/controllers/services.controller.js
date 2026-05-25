
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
function createServices(req,res){

    res.json({
        msg:"crear usuario"
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
