const express = require("express");

const app = express();

app.get("/health", function(req,res){

    res.json({
        msg:"funciona"
    })
})

app.listen(3000, function () {
  console.log("server runng on http://localhost:3000");
});
