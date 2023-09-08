
import mongoose from 'mongoose';

// Define the schema for the Service model
const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Create the Service model based on the schema
const Service = mongoose.models.services || mongoose.model("services", serviceSchema)



export default Service;
