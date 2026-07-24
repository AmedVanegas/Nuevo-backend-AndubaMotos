//service: su responsabilidad es hablarse con la base de datos
import ProductModel from "../models/Product.model.js";
import mongoose from "mongoose";

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
const decrementStockForItems = async (items, session) => {
  for (const item of items) {
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: item.product, stock: { $gte: item.quantity } },
      { $inc: { stock: -item.quantity } },
      { new: true, session },
    );

    if (!updatedProduct) {
      const error = new Error("Stock insuficiente para completar la operación");
      error.code = "INSUFFICIENT_STOCK";
      error.productId = item.product;
      throw error;
    }
  }
};


const restoreStockForItems = async (items, session) => {
  for (const item of items) {
    await ProductModel.findByIdAndUpdate(
      item.product,
      { $inc: { stock: item.quantity } },
      { session },
    );
  }
};

export {
  // ... tus exports que ya tienes
  decrementStockForItems,
  restoreStockForItems,
};

export {
  registerProduct,
  dbGetProducts,
  dbDeleteProduct,
  dbUpdateProduct,
  dbGetProductbyId,
};
