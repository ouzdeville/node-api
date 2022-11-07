import mongoose from "mongoose";
const Schema = mongoose.Schema;

let moyenneUESchema= new mongoose.Schema({

    valeur:{type: Number, required: true },
    
    idEtudiantPromo: { type: Schema.Types.ObjectId, ref: 'etudiantPromo' },
    idUE: { type: Schema.Types.ObjectId, ref: 'ue' },
    
});

const MoyenneUE=mongoose.model("moyenneEC", moyenneUESchema);

export default MoyenneUE;
