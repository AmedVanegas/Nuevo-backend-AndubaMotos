function getUsers(req,res){

    res.json({
        msg:"listar todos los usuarios"
    })
}

function patchUsers(req,res){

    res.json({
        msg:"editar usuarios"
    })
}
function createUsers(req,res){

    res.json({
        msg:"crear usuario"
    })
}
function deleteUsers(req,res){

    res.json({
        msg:"eliminar usuario"
    })
}



export {
    getUsers, createUsers, deleteUsers,patchUsers
}




