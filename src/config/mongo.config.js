
import mongoose from "mongoose";

const localConnection = 'mongodb://127.0.0.1/my_database'

const remoteConnection = 'mongodb+srv://AmedVR:PeDHxm673IYEZD9s@cluster0.tpczf4c.mongodb.net/'


async function dbConnection (){
    
    try {
        await mongoose.connect(localConnection)
        console.log('connected')
        
    } catch (error) {
        console.error(error)
        console.error('connection failed')
        
    }


}


export default dbConnection
