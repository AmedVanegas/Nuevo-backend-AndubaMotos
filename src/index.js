import express from 'express'

import dbConnection from './config/mongo.config.js';

import userRoutes from './routes/user.routes.js'
import productsRoutes from './routes/product.routes.js';
import mcRoutes from './routes/motorcycle.routes.js'
import appointmentRoutes from './routes/appointment.routes.js'
import serviceRoutes from './routes/service.routes.js'
import categoryroutes from './routes/category.routes.js'
import authRoutes from './routes/auth.routes.js' // importacion rutas auth


const app = express();


app. use(express.json()); // habilita la interpretacion del formato  json


//coneccion a la base de datos

dbConnection();

app.use(express.json());  // habilita la lectura de los formatos json


app.get("/health", function(req,res){

    res.json({
        msg:"funciona"
    })
});


//endpoints agrupados


app.use("/api/users", userRoutes)
app.use("/api/services",serviceRoutes );
app.use('/api/products', productsRoutes);
app.use('/api/motorcycles', mcRoutes)
app.use( '/api/appointment', appointmentRoutes)
app.use('/api/category', categoryroutes)
app.use("/api/auth", authRoutes)


// Levantar el servidor
app.listen(3000, function () {
    console.log("server runng on http://localhost:3000");
});
