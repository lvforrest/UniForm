
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport =require("../../validation");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


router.get("/SignOut", function(req, res) {
  res.json(req);
  res.json(req.username);
  // req.logout();
  // res.redirect("/");
});




module.exports = router;