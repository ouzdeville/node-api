import mongoose from "mongoose";
const Schema = mongoose.Schema;

let evaluationSchema= new mongoose.Schema({

    type:{type: String, required: true },
    date:{type: Date, default: Date.now() },
    duree:{type: Number, required: true},
    idProf: [{ type: Schema.Types.ObjectId, ref: 'prof' }],
    idEC: { type: Schema.Types.ObjectId, ref: 'ec' },
});

const Evaluation=mongoose.model("evaluation", evaluationSchema);
export default Evaluation;
