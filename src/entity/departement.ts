import mongoose from "mongoose";
const Schema = mongoose.Schema;

let departementSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    sigle:{type: String, required: true },
    fils: [{ type: Schema.Types.ObjectId, ref: 'departement' }],
    parent: { type: Schema.Types.ObjectId, ref: 'departement' },
    filiere: [{ type: Schema.Types.ObjectId, ref: 'filiere' }],
});

const Departement=mongoose.model("departement", departementSchema);
export default Departement;
