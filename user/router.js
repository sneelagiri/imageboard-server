const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const router = new Router();

router.post("/user", async function(request, response, next) {
  try {
    const user = await User.create({
      email: request.body.email,
      password: bcrypt.hashSync(request.body.password, 10)
    });
    response.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
