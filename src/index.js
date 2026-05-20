import express from 'express'
import userRoutes from './routes/user.routes.js'

const app = express();

app.get("/health", function(req,res){

    res.json({
        msg:"funciona"
    })
})


//endpoints agrupados

app.use("/users", userRoutes)


app.listen(3000, function () {
  console.log("server runng on http://localhost:3000");
});
