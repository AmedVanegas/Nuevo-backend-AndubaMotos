import express from 'express'

import dbConnection from './config/mongo.config.js';

import userRoutes from './routes/user.routes.js'

import productRoutes from './routes/product.routes.js'

import serviceRoutes from './routes/service.routes.js'


const app = express();

//coneccion a la base de datos

dbConnection()

app.get("/health", function(req,res){

    res.json({serviceRoutes
        msg:"funciona"
    })
})


//endpoints agrupados

app.use("/users", userRoutes)
app.use("/products", productRoutes);
app.use("/services",serviceRoutes );


app.listen(3000, function () {
  console.log("server runng on http://localhost:3000");
});
