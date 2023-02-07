const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

router.get("/", userController.getUsers);

//create user and test users db
router.post("/", userController.createUser);

module.exports = router;
