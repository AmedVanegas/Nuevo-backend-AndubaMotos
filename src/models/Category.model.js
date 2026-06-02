

import {Schema, model }from "mongoose";

const CategorySchema = new Schema({

    name:{
        type: String,
        unique:true,
        trim:true,
        required:true
    },
    description:String,
    registerignUserId:{
        type:Schema.Types.ObjectId,
        ref:"users"
    }

},{
    versionKey:false,
    timeseries:true
})

const CategoryModel = model(
    "categories",
    CategorySchema

)


export default CategoryModel