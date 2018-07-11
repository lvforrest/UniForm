
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport =require("passport");

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

router
  .route("/api/user/:email/:password")
  .get(userController.findOne);

router.

router.post("/Login", passport.authenticate("local"), function(req,res){

});
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});




module.exports = router;