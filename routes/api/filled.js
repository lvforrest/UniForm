const router = require("express").Router();
const filledController = require("../../controllers/filledController");

// Matches with "/api/filled"
router.route("/")
  .post(filledController.create);


router.route("/user/:query")
  .get(filledController.findAll)
// Matches with "/api/filled/:id"
router
  .route("/:id")
  .get(filledController.findById)
  .put(filledController.update)
  .delete(filledController.remove);
router 
  .route("/patron/:id") 
  .get(filledController.findByPatron);
router 
  .route("/template/:id") 
  .get(filledController.findByTemplate);
module.exports = router;
