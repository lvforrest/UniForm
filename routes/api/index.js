const router = require("express").Router();
const filledRoutes = require("./filled");
const templateRoutes = require("./template");
const userRoutes = require("./user");
const questrianRoutes = require("./questrian"); 


// filled routes
router.use("/filled", filledRoutes);
router.use("/template", templateRoutes);
router.use("/user", userRoutes);
router.use("/questrian", questrianRoutes) 
module.exports = router;
