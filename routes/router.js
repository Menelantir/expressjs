const express = require("express");
const router  = express.Router();

router.get("/services", (req, res) => res.render("services"));
router.get("/contact", (req, res) => res.render("contact"));

module.exports = router;
