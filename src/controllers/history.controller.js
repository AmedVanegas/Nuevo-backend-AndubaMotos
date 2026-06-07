import mongoose from "mongoose";
import { dbgetHistorybyId } from "../services/history.services";

const getHistorybyId = async (req,res)=>{

    const userID = req.params.userID
    
    const history = await dbgetHistorybyId(userID)


}