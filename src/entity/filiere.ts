import mongoose from "mongoose";
const Schema = mongoose.Schema;

let filiereSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    sigle:{type: String, required: true },
    niveaux: [{ type: Schema.Types.ObjectId, ref: 'niveau' }],
    departement: { type: Schema.Types.ObjectId, ref: 'departement' },
});

const Filiere=mongoose.model("filiere", filiereSchema);
export default Filiere;
