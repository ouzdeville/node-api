import mongoose from "mongoose";
const Schema = mongoose.Schema;

let moyenneSemestreSchema= new mongoose.Schema({

    valeur:{type: Number, required: true },
    semestre:{type: String, required: true },
    
    idEtudiantPromo: { type: Schema.Types.ObjectId, ref: 'etudiantPromo' },
    credit:{type: Number, required: true },
    
});

const MoyenneSemestre=mongoose.model("moyenneSemestre", moyenneSemestreSchema);

export default MoyenneSemestre;
