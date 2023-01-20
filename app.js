const express = require("express");
const { evaluationRouter } = require("./routers/evaluation");
const { evaluationRouter2 } = require("./routers/evaluation2");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/evaluation", evaluationRouter);
app.use("/evaluation2", evaluationRouter2);

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}/`);
});