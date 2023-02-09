const express = require("express");
const userController = require("./../controllers/userController");
const auth = require("./../controllers/auth");
const router = express.Router();
const { param, validationResult } = require("express-validator");

const { protect } = require('./../middlewares/auth');
// router.get("/", userController.getUsers);
// //create user and test users db
// router.post("/", userController.createUser);



router.route("/").get(protect, userController.getUsers).post(userController.createUser);
router
  .route("/:id")
  .get(
    param("id").isMongoId().withMessage("invalid user id"),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    },
    userController.getUser
  )
  .put(userController.updateUser)
  .delete(userController.deleteUser);



  router.post('/login',auth.login)

module.exports = router;
