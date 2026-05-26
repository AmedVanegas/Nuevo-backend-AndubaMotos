// Controller se encarga de manejar las peticiones y las respuestas de los clientes

const createAppointment = async ( req, res ) => {

    try {
        const inputData = req.body;

    const data = await insertAppointment(inputData);

    res.json({
        msg: 'Crea una nueva cita',
        data: data
    });

    } catch (error) {
        console.error(error);

        res.json ({
            msg: 'Error: No se pudo crear la cita'
        })
    }
} ;

const getAppointment = ( req, res ) => {
    res.json({
        msg: 'Obtener todas las citas'
    });
};

const updateAppointment = ( req, res ) => {
    res.json({
        msg: 'Actualiza la cita'
    });
} ;

const deletAppointment = ( req, res ) => {
    res.json({
        msg: 'Elimina la cita'
    });
} ;


export {
    createAppointment,
    getAppointment,
    updateAppointment,
    deletAppointment,
};