import mongoose from "mongoose";

const Schema = mongoose.Schema;

const etudiantSchema = new Schema(
  {
    slug: { type: String, index: true },
    name: {
      first: String,
      last: String,
      midle: String
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    active: {
      type: String,
      required: true
    },
    coord: [{
      latitude: Number,
      longitude: Number,
      altitude: Number
    }],
    email:{
      type: String,
      index: true
    }
  },
  {
    timestamps: true
  }
);

const Etudiant = mongoose.model("etudiant", etudiantSchema);

export default Etudiant;