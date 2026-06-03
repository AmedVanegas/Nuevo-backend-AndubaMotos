import { hashSync, genSaltSync } from 'bcrypt'

const encryptedPassword = (originalPassword)=>{

    //Paso 1: Generar una cadena aleatoria (salt)
    const salt = genSaltSync(6) //NO CAMBIAR EL 6 DEPUES PROBLEMAS CON LA BASE DE DATOS

    const hashPassword = hashSync(originalPassword,salt)

    console.log(salt)
    
    return hashPassword
}

export {
    encryptedPassword
}