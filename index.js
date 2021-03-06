const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Image = require("./image/model");
const imageRouter = require("./image/router");
const cors = require("cors");
const corsMiddleware = cors();
const auth = require("./auth/router");
const userRouter = require("./user/router");
app.use(corsMiddleware);
app.use(express.json());
app.use(imageRouter);
app.use(auth);
app.use(userRouter);
app.listen(port, () => {
  console.log("Listening on port: ", port);
});
