import productModel from "../models/products.models.js";

const getProducts = (req,res)=>{
    res.json({
        msg: 'listar productos'
    });
};
const pacthProducts = (req,res)=>{
    res.json({
        msg: 'actualiza los productos'
    });
};

const postProducts = async(req,res)=>{

    const inputData = req.body; // obtiene los datos enviados en la peticion

    const data = await productModel.create(inputData)  // registra usando el modelo y guarda la respuesta en la constante data

    res.json({                        // respondemos al clientre enviando los datos registrados
        msg: 'crea los productos',
        inputData:inputData
    });
};


const deleteProducts = (req,res)=>{
    res.json({
        msg: 'borra productos'
    });
};

export  {getProducts,pacthProducts,postProducts,deleteProducts}