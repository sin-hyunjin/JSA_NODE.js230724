const { Router } = require("express");
const express = require("express");
const { route } = require("./router");
const router = express(Router);

router.get("/Login", (request, response) => {
  response.render("Login");
});

module.exports = router;
