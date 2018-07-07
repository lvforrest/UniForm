const router = require("express").Router();
const filledRoutes = require("./filled");
const templateRoutes = require("./template");
const userRoutes = require("./user");
const patronRoutes = require("./patron"); 


// filled routes
router.use("/filled", filledRoutes);
router.use("/template", templateRoutes);
router.use("/user", userRoutes);
router.use("/patron", patronRoutes) 
module.exports = router;
