import mongoose from "mongoose";



import{dbinsertShoppingcar, dbGetShoppingcar, dbdeleteShoppingcar, dbpatchShoppingcar, dbGetShoppingcarByid} from "../services/shoppingcar.service.js"


const createdShoppingcar = async (req, res) => {

    try {
        const inputData = req.body
        console.log('inputData', inputData);
        const createdShoppingcar = await dbinsertShoppingcar(inputData)

        if (!createdShoppingcar) {
          return res.status(400).json({
          msg: "no hay productos dentro del carrito",
         });
     }

        res.status(201).json({
         createdShoppingcar

        })


    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "no se pudo crear  la compraaa"
        });

    };
}


const getShoppingcar = async (req, res) => {

    try {
        const data = await dbGetShoppingcar();

        if (!data || data.length === 0) {
      return res.status(400).json({
        msg: "no hay productos dentro del carrito",
      });
    }

        res.json({
            msg: "obtener todas las compras",
            data: data
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener el listado de la compra'
        });

    };
}



const patchShoppingcar = async (req, res) => {

    try {
         const id = req.params.idshoppingcar       // id de la ruta para encontrar el documento que quiero actualizar
         const inputData = req.body                // obteniendo el objeto con el/los parametros que quiero actualizar

          if (Object.keys(inputData).length === 0) {
            return res.status(400).json({
            msg: "Debe enviar al menos un campo para actualizar",
          });
}

        const data = await dbpatchShoppingcar(id, inputData)   //el objeto con las propiedades y los valores que deseamos actualizar


        if (!data) {                                                                                // creo una excepcion (falsa)
            throw new Error('no se pudo actualizar el producto porque no se encuentra agregado al carrito') // yo creo un error(y crea una excepcion)
        }

        res.status(200).json({
            msg: "se actualizo el producto",
            data: data
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'no se pudo actualizar el producto'
        })
    }
}



const deleteShoppingcar = async (req, res) => {

    try {
        const id = req.params.idshoppingcar

        const data = await dbdeleteShoppingcar(id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
              return res.status(400).json({
                msg: 'no se puede eliminar porque el ID proporcionado es invalido'
              });
          };

            res.status(200).json({
            msg: "eliminar producto",
            data: data
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'error: no se pudo eliminar el producto'
        })
    }
}



const getShoppingcarByid = async (req, res) => {

    try {
        const id = req.params.idshoppingcar       // id de la ruta para encontrar el documento que quiero actualizar

        const data = await dbGetShoppingcarByid(id)   //el objeto con las propiedades y los valores que deseamos actualizar.

            if (!data) {
                return res.json({
                    msg: 'no se puede obtener el producto porque el ID  es invalido carrito'
                })
            }

        res.status(200).json({
            msg: "sbljhccvxcxzgcvxck,jhbñjkh",
            data: data
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            msg: 'error: no se pudo obtener el producto'
        })

    }
}


export{createdShoppingcar,getShoppingcar,patchShoppingcar,deleteShoppingcar,getShoppingcarByid}
