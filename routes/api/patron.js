const router = require("express").Router(); 
const patronController = require("../../controllers/patronController"); 
 
// Matches with "/api/user" 
router.route("/") 
  .post(patronController.create); 
 
  router.route("/find/:query")
  .get(patronController.findAll)
// Matches with "/api/user/:id" 
router 
  .route("/:id") 
  .get(patronController.findById) 
  .put(patronController.update) 
  .delete(patronController.remove); 
router 
  .route("/name/:name") 
  .get(patronController.findOne); 
module.exports = router;