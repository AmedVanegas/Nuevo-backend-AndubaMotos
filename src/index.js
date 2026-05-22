import express from 'express'

import dbConnection from './config/mongo.config.js';

import userRoutes from './routes/user.routes.js'
import productsRoutes from './routes/product.routes.js';

const app = express();

//coneccion a la base de datos

dbConnection()

//middlewares
app.use(express.json());  // habilitamos la interpretacion de objetos json

app.get("/health", function(req,res){

    res.json({
        msg:"funciona"
    })
})


//endpoints agrupados

app.use("/users", userRoutes)
app.use('/products', productsRoutes);


app.listen(3000, function () {
  console.log("server runng on http://localhost:3000");
});
