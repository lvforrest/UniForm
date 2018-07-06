const router = require("express").Router(); 
const patronController = require("../../controllers/patronController"); 
 
// Matches with "/api/user" 
router.route("/") 
  .get(patronController.findAll) 
  .post(patronController.create); 
 
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