import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ecSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    coef:{type: Number, required: true },
    type:{type: String, required: true },
    idUE: { type: Schema.Types.ObjectId, ref: 'UE' },
    idProf: { type: Schema.Types.ObjectId, ref: 'prof' },
});

const EC=mongoose.model("ec", ecSchema);
export default EC;
