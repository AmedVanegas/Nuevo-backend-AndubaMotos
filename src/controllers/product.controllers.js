import { insertproduct } from "../services/product.service.js";

const getProducts = (req, res) => {
  res.json({
    msg: "listar productos",
  });
};



const pacthProducts = (req, res) => {
  res.json({
    msg: "actualiza los productos",
  });
};




const postProducts = async (req, res) => {
  try {
    const inputData = req.body; // obtiene los datos enviados en la peticion

    const data = await insertproduct(inputData); // registra usando el modelo y guarda la respuesta en la constante data

    res.status(201).json({                  // respondemos al clientre enviando los datos registrados y el codigo  de estado cuando se crea un recurso nuevo con exito
      msg: "crea los productos",
      inputData: inputData,
    });
  } catch (error) {
    console.error(error); //respuesta para el desarrollador
    res.status(500).json({
      msg: "no se pudo registrar el producto", // respuesta para el cliente
    });
  }
};




const deleteProducts = (req, res) => {
  res.json({
    msg: "borra productos",
  });
};




export { getProducts, pacthProducts, postProducts, deleteProducts };
