import {
  dbDeleteMotorcycle,
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
    console.log(error)
    res.status(500).json({
      msg:'No se pudo actualizar la motocicleta'
    })
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

export { getMc, patchMc, createMc, deleteMc };
