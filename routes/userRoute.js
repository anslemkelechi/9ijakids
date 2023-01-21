const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

router.route("/new-user").post(userController.createUser);
router.route("/").post(userController.readUser).get(userController.getAllUsers);
router.route("/update/:id").patch(userController.updateUser);
router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;
