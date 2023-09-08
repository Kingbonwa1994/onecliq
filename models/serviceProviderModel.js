import mongoose from "mongoose";

const serviceProvierSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, "Enter you mobile number"],
        unique: true,
    },
    password: {
        type: password,
        required: [true, "create a unique password"],
        unique: true,
    },
    services: {
        type: [],
        requied: [true, "You must specify your services"],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: String,

}) 

const ServiceProvider = mongoose.models.serviceproviders || mongoose.model("serviceprovisers");

export default ServiceProvider;