import express from 'express'

import dbConnection from './config/mongo.config.js';

import userRoutes from './routes/user.routes.js'

import mcRoutes from './routes/motorcycle.routes.js'

const app = express();


app.use(express.json())

//coneccion a la base de datos

dbConnection()

app.get("/health", function(req,res){

    res.json({
        msg:"funciona"
    })
})


//endpoints agrupados

app.use("/users", userRoutes)

app.use('/motorcycles', mcRoutes)


app.listen(3000, function () {
  console.log("server runng on http://localhost:3000");
});
