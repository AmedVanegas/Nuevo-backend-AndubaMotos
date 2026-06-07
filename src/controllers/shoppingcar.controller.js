import mongoose from "mongoose";



import{dbinsertShoppingcar, dbGetShoppingcar, dbdeleteShoppingcar, dbpatchShoppingcar, dbGetShoppingcarByid} from "../services/shoppingcar.service.js"


const createdShoppingcar = async (req, res) => {


    try {
        const inputData = req.body
        const createdShoppingcar = await dbinsertShoppingcar(inputData)

        res.status(201).json({
            createdShoppingcar: createdShoppingcar,

        })


    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "no se pudo crear el la compra"
        });

    };
}

const getShoppingcar = async (req, res) => {

    try {
        const data = await dbGetShoppingcar();

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

        const data = await dbpatchShoppingcar(id, inputData)   //el objeto con las propiedades y los valores que deseamos actualizar


        if (!data) {                                                                                // creo una excepcion (falsa)
            throw new Error('no se pudo actualizar el producto porque no se encuentra agregado al carrito') // yo creo un error(y crea una excepcion)
        }

        if (!data) {
        
                return res.json({
                    msg: 'no se puede actualizar un producto que no se encuentra en el carrito'
                })
      
        }


        res.status(200).json({
            msg: "se actualizo el producto",
            data: data
        })
    } catch (error) {
        console.error(error)

        if (error.name === 'CastError') {
            return res.status(400).json({
                msg: 'no se pudo actualizar el producto, porque el id es invalido'
            })
        }

        if (error.message.includes('no se pudo actualizar el producto porque no se encuentra ene el carrito')) {
            return res.json({
                msg: error.message
            })
        }

        res.status(500).json({
            msg: 'no se pudo actualizar el producto'
        })
    }
}

const deleteShoppingcar = async (req, res) => {

    try {
        const id = req.params.idshoppingcar



          if (!mongoose.Types.ObjectId.isValid(id)) {
              return res.status(400).json({
                msg: 'no se puede eliminar porque el ID proporcionado es invalido'
              });
          };



        const data = await dbdeleteShoppingcar(id);


        if (!data) {
             
                return res.json({
                    msg: 'no se puede eliminar un producto que no se encuentra dentro del carrito de compras'
                })
            }
        


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
                    msg: 'no se puede obtener un producto que no se encuentra en el carrito'
                })
            }
        


        res.status(200).json({
            msg: "Shopping carts",
            data: data
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            msg: 'error: no se pudo obtener el producto'
        })

    }
}


export{createdShoppingcar,getShoppingcar,patchShoppingcar,deleteShoppingcar,getShoppingcarByid

}