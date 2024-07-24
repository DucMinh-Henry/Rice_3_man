require("dotenv").config();
const express = require("express");
const ConfigViewEngine = require("./src/config/viewengine");
const webroute = require("./src/routes/index.route");
const app = express();

const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 8888;
const hostname = process.env.hostname;

ConfigViewEngine(app);
app.use(express.json()); //UsedtoparseJSONbodies
app.use(express.urlencoded()); //ParseURL-encodedbodies

app.use("/", webroute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
