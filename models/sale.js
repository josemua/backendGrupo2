const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductDetailSchema = Schema({
  id: { type: String, require: true },
  price: {type: Number, require: true},
  amount: { type: Number, require: true },
  desc: { type: String },
  name: { type: String },
});

const SaleSchema = Schema(
  {
    price: { type: Number, required: true },
    clientName: { type: String, required: true },
    clientId: { type: String, required: true },
    sellerId: { type: String, required: true },
    status: { type: String, default: "Procesando" },
    products: [ProductDetailSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales", SaleSchema);
