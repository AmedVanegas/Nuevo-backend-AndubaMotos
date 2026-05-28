//service: su responsabilidad es hablarse con la base de datos
import ProductModel from "../models/Product.model.js";

const registerProduct = async (newProduct) => {
  return await ProductModel.create(newProduct);
};

const dbGetProducts = async () => {
  return await ProductModel.find();
};

const dbGetProductbyId = async (productId) => {
  return await ProductModel.findOne({ _id: productId });
};

const dbDeleteProduct = async (productId) => {
  return await ProductModel.findByIdAndDelete(productId);
};

const dbUpdateProduct = async (productId, updateData) => {
  return await ProductModel.findByIdAndUpdate(productId, updateData, {
    returnDocument: "after",
  });
};

export { registerProduct, dbGetProducts, dbDeleteProduct, dbUpdateProduct , dbGetProductbyId};
