import mongoose from "mongoose";
import {
  dbDeleteMotorcycle,
  dbGetMotorcycleById,
  dbGetMotorcycles,
  dbUpdateMotorcycle,
  registerMotorcycle,
} from "../services/motorcycle.services.js";

async function getMc(req, res) {
  try {
    const data = await dbGetMotorcycles();

    res.json({
      msg: "lista motocicletas",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "no se pudieron obtener las motocicletas",
    });
  }
}

async function getMcById(req, res) {
  try {
    const motorcycleId = req.params.motorcycleId;

    if(!mongoose.Types.ObjectId.isValid(motorcycleId)){

      return res.status(400).json({
        msg:'Ingrese un id valido'
      })

    }



    const motorcycle = await dbGetMotorcycleById(motorcycleId);

    res.json({
      msg: "Motocicleta",
      motorcycle: motorcycle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "No se pudo traer la motocicleta",
    });
  }
}

async function patchMc(req, res) {
  try {
    const motorcycleId = req.params.motorcycleId;

    const updateData = req.body;

    const updatedMotorcycle = await dbUpdateMotorcycle(
      motorcycleId,
      updateData,
    );

    res.json({
      msg: "actualizar motocicletas",
      updatedMotorcycle: updatedMotorcycle,
    });
  } catch (error) {
    console.log(error);

    if(error.name === 'CastError'){

      return res.status(400).json({
        msg: 'Ingrese un id valido'
      })


    }
    res.status(500).json({
      msg: "No se pudo actualizar la motocicleta",
    });
  }
}
async function createMc(req, res) {
  try {
    const inputData = req.body;

    const data = await registerMotorcycle(inputData);

    res.status(201).json({
      msg: "moto registrada",
      data: data,
    });
  } catch (error) {
    console.log(error);

    res.status(501).json({
      msg: "no se pudo registrar la moto",
    });
  }
}
async function deleteMc(req, res) {
  try {
    let { motorcycleId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(motorcycleId)){

      return res.status(400).json({
        msg:'Ingrese un id valido'
      })

    }

    let deletedMotorcycle = await dbDeleteMotorcycle(motorcycleId);

    res.json({
      msg: "Motocicleta eliminada",
      deletedMotorcycle: deletedMotorcycle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "No se pudo eliminar la motocicleta",
    });
  }
}

export { getMc, patchMc, createMc, deleteMc, getMcById };
