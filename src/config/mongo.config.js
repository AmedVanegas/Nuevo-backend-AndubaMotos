
import mongoose from "mongoose";

const localConnection = 'mongodb://127.0.0.1/my_database'

const remoteConnection = 'mongodb+srv://AmedVR:ELVgOZuOwqSSr43s@cluster0.tpczf4c.mongodb.net/Ecommerce'

const joseAtlas = "mongodb+srv://jose-duarte:gnO1oOrnLms1wHPM@cluster0.bg5w80b.mongodb.net/Ecommerce"


async function dbConnection (){
    
    try {
        await mongoose.connect(joseAtlas)
        console.log('connected')
        
    } catch (error) {
        console.error(error)
        console.error('connection failed')
        
    }


}


export default dbConnection
