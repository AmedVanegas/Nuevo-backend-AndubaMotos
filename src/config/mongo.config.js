
import mongoose from "mongoose";

const localConnection = 'mongodb://127.0.0.1/Ecommerce'

const remoteConnection = 'mongodb+srv://AmedVR:ELVgOZuOwqSSr43s@cluster0.tpczf4c.mongodb.net/Ecommerce'




async function dbConnection (){
    
    try {
        await mongoose.connect(remoteConnection)
        console.log('connected')
        
    } catch (error) {
        console.error(error)
        console.error('connection failed')
        
    };


};


export default dbConnection
