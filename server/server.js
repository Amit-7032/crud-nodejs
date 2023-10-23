const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/TaskRoute");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((error) => {
    console.log(error);
  });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//   res.send('This is an about page!')
// })
// app.get('/api', (req, res) => {
//   res.json({"users":["userOne", "userTwo", "userThree"]})
// })
// app.get('/download', (req, res) => {
//   res.download(path.resolve(__dirname) + "../client/public/index.html");
// })

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
