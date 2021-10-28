const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema(
    {
        name:{type: String, required:true, unique: true },
        desc:{type: String, required:true},
        price:{type: Number, required:true},
        state:{type: Boolean, default:true}
    },
    { timestamps : true }
);

module.exports = mongoose.model("Products", ProductSchema);