import mongoose from "mongoose";
const Schema = mongoose.Schema;

let noteSchema= new mongoose.Schema({

    valeur:{type: Number, required: true },
    
    idEtudiantPromo: { type: Schema.Types.ObjectId, ref: 'etudiantPromo' },
    idEvaluation: { type: Schema.Types.ObjectId, ref: 'evaluation' },
    
});

const Note=mongoose.model("note", noteSchema);
export default Note;
