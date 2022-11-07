import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profSchema = new Schema(
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
    numeroCompte: {
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

const Prof = mongoose.model("prof", profSchema);

export default Prof;