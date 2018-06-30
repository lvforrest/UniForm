const router = require("express").Router(); 
const questrianController = require("../../controllers/questrianController"); 
 
// Matches with "/api/user" 
router.route("/") 
  .get(questrianController.findAll) 
  .post(questrianController.create); 
 
// Matches with "/api/user/:id" 
router 
  .route("/:id") 
  .get(questrianController.findById) 
  .put(questrianController.update) 
  .delete(questrianController.remove); 
 
module.exports = router;