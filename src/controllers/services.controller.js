

// controller se encarga de manejar las peticiones y las respuestas de los clientes

import mongoose from "express";



import { dbGetServices, dbinsertService, dbdeleteservice, dbpatchservice, dbGetServicesByid } from "../services/service.service.js"





const getServices = async (req, res) => {

    try {
        const data = await dbGetServices();

        res.json({
            msg: "obtener todos los servicios",
            data: data
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener el listado de productos'
        });

    };
};




const createServices = async (req, res) => {


    try {
        const inputData = req.body
        const createdService = await dbinsertService(inputData)

        res.status(201).json({
            createdService: createdService,

        })


    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "no se pudo crear el servicio"
        });

    };
}








const patchServices = async (req, res) => {

    try {
        const id = req.params.idservice       // id de la ruta para encontrar el documento que quiero actualizar
        const inputData = req.body                // obteniendo el objeto con el/los parametros que quiero actualizar

        const data = await dbpatchservice(id, inputData)   //el objeto con las propiedades y los valores que deseamos actualizar


        if (!date) {                                                                                // creo una excepcion (falsa)
            throw new Error('no se pudo actualizar el producto porque no se encuentra registrado') // yo creo un error(y crea una excepcion)
        }

        if (!data) {
            if (!data) {
                return res.json({
                    msg: 'no se puede actualizar un servicio que no se encuentra registrado'
                })
            }
        }


        res.status(200).json({
            msg: "se actualizo el servicio",
            data: data
        })
    } catch (error) {
        console.error(error)

        if (error.name === 'CastError') {
            return res.status(400).json({
                msg: 'no se pudo actualizar el producto, porque el id es invalido'
            })
        }

        if (error.message.includes('no se pudo actualizar el producto porque no se encuentra registrado')) {
            return res.json({
                msg: error.message
            })
        }

        res.status(500).json({
            msg: 'no se pudo actualizar el producto'
        })
    }
}









const deleteServices = async (req, res) => {

    try {
        const id = req.params.idservice



        if (!mongoose.Types.ObjectId.isvalid(id)) {
            return res.status(400).json({
                msg: 'no se puede eliminar porque el ID proporcionado es invalido'
            })
        }



        const data = await dbdeleteservice(id);


        if (!data) {
            if (!data) {
                return res.json({
                    msg: 'no se ´puede eliminar un servicio que no se encuentra registrado'
                })
            }
        }


        res.status(200).json({
            msg: "eliminar usuario",
            data: data
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'error: no se pudo eliminar el servicio'
        })
    }
}








const getServicesByid = async (req, res) => {

    try {
        const id = req.params.idservice       // id de la ruta para encontrar el documento que quiero actualizar




        const data = await dbGetServicesByid(id)   //el objeto con las propiedades y los valores que deseamos actualizar.

        if (!data) {
            if (!data) {
                return res.json({
                    msg: 'no se puede obtener un servicio que no se encuentra registrado'
                })
            }
        }


        res.status(200).json({
            msg: "sbljhccvxcxzgcvxck,jhbñjkh",
            data: data
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            msg: 'error: no se pudo obtener el elemento'
        })

    }
}

export {
    getServices, createServices, deleteServices, patchServices, getServicesByid
}
