import mongoose from "mongoose";
const Schema = mongoose.Schema;

let moyenneECSchema= new mongoose.Schema({

    valeur:{type: Number, required: true },
    
    idEtudiantPromo: { type: Schema.Types.ObjectId, ref: 'etudiantPromo' },
    idEC: { type: Schema.Types.ObjectId, ref: 'ec' },
    
});

const MoyenneEC=mongoose.model("moyenneEC", moyenneECSchema);
export default MoyenneEC;
