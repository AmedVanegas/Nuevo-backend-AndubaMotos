
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
function createMc (req,res){

    res.json({
        msg:'registar motocicletas'
    })

}
function deleteMc (req,res){

    res.json({
        msg:'eliminar motocicletas'
    })

}

export {getMc,patchMc,createMc,deleteMc}