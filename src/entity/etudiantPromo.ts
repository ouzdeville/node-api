import mongoose from "mongoose";
const Schema = mongoose.Schema;

let etudiantPromoSchema= new mongoose.Schema({

    rabais:{type: String, required: true },
    
    idEtudiant: { type: Schema.Types.ObjectId, ref: 'etudiant' },
    idCohorte: { type: Schema.Types.ObjectId, ref: 'cohorte' },
    nombre: Number,
    idEtudiantPromo: [{ type: Schema.Types.ObjectId, ref: 'etudiantPromo ' }],
    
});

const EtudiantPromo=mongoose.model("etudiantPromo", etudiantPromoSchema);
export default EtudiantPromo;
