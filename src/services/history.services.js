import HistoryModel from "../models/History.model.js"

const dbgetHistorybyId = async (userID)=>{
    
    return await HistoryModel.findOne({usuario : userID })
    .populate({path:'products', })
}

export {dbgetHistorybyId}