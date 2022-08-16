import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  imageDetails : [{
  restaurant : {type: mongoose.Types.ObjectId, ref: "Restaurants", required: true},
  food : {type: mongoose.Types.ObjectId, ref: "Foods", required: true},
  name : {type : String, required : true}
  }]
},
{
  timestamps: true
});

export const ImageModel = mongoose.model("Images",ImageSchema);