const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true, min: 8 },
    isAdmin: { type: Boolean, default: false },
    status: { type: String, default: "pendiente" },
    name: { type: String},
    tel: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
