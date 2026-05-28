import {
  dbDeleteProduct,
  dbGetProducts,
  dbUpdateProduct,
  registerProduct,
} from "../services/product.service.js";

const getProducts = async (req, res) => {
  try {
    const products = await dbGetProducts();

    res.json({
      msg: "Lista de productos",
      products: products,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "No se pudo obtener los productos",
    });
  }
};

const pacthProducts = async (req, res) => {
  try {
    const productId = req.params.productId;

    const updateData = req.body;

    const updatedProduct = await dbUpdateProduct(productId, updateData);

    res.json({
      msg: "Producto actualizado",
      updatedProduct: updatedProduct,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg:'No se pudo actualizar el producto'
    })
  }
};

const createProduct = async (req, res) => {
  try {
    const inputData = req.body; // obtiene los datos enviados en la peticion

    const data = await registerProduct(inputData); // registra usando el modelo y guarda la respuesta en la constante data

    res.status(201).json({
      // respondemos al clientre enviando los datos registrados y el codigo  de estado cuando se crea un recurso nuevo con exito
      msg: "Producto creado",
      inputData: data,
    });
  } catch (error) {
    console.error(error); //respuesta para el desarrollador
    res.status(500).json({
      msg: "no se pudo registrar el producto", // respuesta para el cliente
    });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await dbDeleteProduct(productId);

    res.json({
      msg: "Producto eliminado",
      deletedProduct: deletedProduct,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "No se pudo eliminar el producto",
    });
  }
};

export { getProducts, pacthProducts, createProduct, deleteProducts };
