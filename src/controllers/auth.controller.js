import { dbGetUserbyUsername } from "../services/user.service.js";

const loginUser = async (req,res)=>{

    const inputData = req.body;  // toma el usuario y contraseña

    // 2.Verificar si el usuario exisite

    const dbUser = await dbGetUserbyUsername(inputData.username)

    if (!dbUser){

        return res.status(400).json({
            error:"El usuario no existe, por favor registrese"
        })
    }
    
    // 3. Verificar si la contraseña es valida


    res.json({
        msg:dbUser
    })


}

export {loginUser}