import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ueSchema= new mongoose.Schema({

    code:{type: String, required: true },
    nom:{type: String, required: true },
    credit:{type: Number, required: true },
    idPromo: { type: Schema.Types.ObjectId, ref: 'promo' },
    semestre:{type: String, required: true },
});

const UE=mongoose.model("ue", ueSchema);
export default UE;
