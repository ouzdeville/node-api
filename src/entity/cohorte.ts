import mongoose from "mongoose";
const Schema = mongoose.Schema;

let cohorteSchema= new mongoose.Schema({

    nom:{type: String, required: true },
 
    idPromo: { type: Schema.Types.ObjectId, ref: 'promo' },

});

const Cohorte=mongoose.model("cohorte", cohorteSchema);
export default Cohorte;
