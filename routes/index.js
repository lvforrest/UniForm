const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var passport = require('../validation');

// API Routes
router.post("/login", passport.authenticate("local"), function(req,res){
  console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
});

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
