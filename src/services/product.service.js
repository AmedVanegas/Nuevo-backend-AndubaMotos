//service: su responsabilidad es hablarse con la base de datos
import productModel from "../models/products.models.js";


const insertproduct = async(newProduct)=>{
    return await productModel.create(newProduct);
};


export{
    insertproduct
};