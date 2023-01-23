const express = require("express");
const { PORT } = require("./config");
const router = require("./routers/router_cities");
const app = express();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});