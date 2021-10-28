const { Router } = require("express");
const router = Router();
const { body } = require("express-validator");
const { usersController } = require("../controllers");
const verifyToken = require("../middlewares/verifyToken");
//GET USER
router.get("/:id", verifyToken, usersController.getUser);
//GET ALL USERS
router.get("/", verifyToken, usersController.getUsers);
//CREATE USER
router.post(
  "/",
  body("email", "El email es requerido y debe tener minimo 6 caracteres")
    .exists()
    .isEmail(),
  body(
    "password",
    "la contraseña es requerida y debe tener minimo 8 caracteres"
  )
    .exists()
    .isLength({ min: 8 }),
  usersController.createUser
);
//UPDATE USER
router.put(
  "/:id",
  body("email", "El email es requerido y debe tener minimo 6 caracteres")
    .exists()
    .isEmail(),
  body(
    "password",
    "la contraseña es requerida y debe tener minimo 8 caracteres"
  )
    .exists()
    .isLength({ min: 8 }),
  verifyToken,
  usersController.updateUser
);
//DELETE USER
router.delete("/:id", verifyToken, usersController.deleteUser);

module.exports = router;
