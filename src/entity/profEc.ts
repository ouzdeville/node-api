import mongoose from "mongoose";
const Schema = mongoose.Schema;

let profECSchema= new mongoose.Schema({

   
    idProf: { type: Schema.Types.ObjectId, ref: 'prof' },
    idEC: { type: Schema.Types.ObjectId, ref: 'ec' },
    
});

const ProfEC=mongoose.model("profEC", profECSchema);

export default ProfEC;
