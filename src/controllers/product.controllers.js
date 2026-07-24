import mongoose from "mongoose";
import {
  dbDeleteProduct,
  dbGetProductbyId,
  dbGetProducts,
  dbUpdateProduct,
  registerProduct,
} from "../services/product.service.js";

const getProducts = async (req, res) => {
  try {
    const products = await dbGetProducts();

    if (!products || products.length === 0) {
      return res.status(400).json({
        msg: "No hay productos registrados",
      });
    }

    res.json({
      msg: "Lista de productos",
      data: products,
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

    if (!updatedProduct) {
      throw new Error("El producto solicitado no existe");
    }

    res.json({
      msg: "Producto actualizado",
      updatedProduct: updatedProduct,
    });
  } catch (error) {
    console.log(error);

    if (error.name === "CastError") {
      res.status(400).json({
        msg: "Ingrese un Id valido",
      });
    }

    if (error.message.includes("El producto solicitado no existe")) {
      res.status(400).json({
        msg: error.message,
      });
    }

    res.status(500).json({
      msg: "No se pudo actualizar el producto",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(500).json({
        msg: "Ingrese un Id valido",
      });
    }

    const product = await dbGetProductbyId(productId);

    if (!product) {
      res.status(500).json({
        msg: "El producto no existe",
      });
    }

    res.json({
      msg: "Producto",
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "No se pudo traer el producto",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const inputData = req.body;

    inputData.createdBy = req.payload._id

    // obtiene los datos enviados en la peticion

    if (!inputData) {
      return res.status(400).json({
        msg: "Tiene que ingresar datos para crear el producto",
      });
    }

    const data = await registerProduct(inputData);

    await data.populate("createdBy", "username _id email"); // registra usando el modelo y guarda la respuesta en la constante data

    res.status(201).json({
      // respondemos al clientre enviando los datos registrados y el codigo  de estado cuando se crea un recurso nuevo con exito
      msg: "Producto creado",
      inputData: data,
    });
  } catch (error) {
    console.error(error); //respuesta para el desarrollador

    if (error.code === 11000) {
      const repeatedValue = Object.entries(error.keyValue);

      return res.status(400).json({
        msg: "Ingrese un objeto sin propiedades repetidas",
        repeated: repeatedValue,
      });
    }

    res.status(500).json({
      msg: "no se pudo registrar el producto", // respuesta para el cliente
    });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(500).json({
        msg: "Ingrese un Id valido",
      });
    }

    const deletedProduct = await dbDeleteProduct(productId);

    if (!deletedProduct) {
      res.status(500).json({
        msg: "El producto que intenta eliminar no existe",
      });
    }

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

export {
  getProducts,
  pacthProducts,
  createProduct,
  deleteProducts,
  getProductById,
};
