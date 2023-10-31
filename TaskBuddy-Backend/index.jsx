const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModels = require("./Models/TodoModel.jsx");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://priyanshuhotaph:goldy9692@test.nk2phgh.mongodb.net/?retryWrites=true&w=majority"
);


app.get("/get", (req, res) => {
  TodoModels.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post("/add", (req, res) => {
  const text = req.body.text;
  TodoModels.create({
    text: text
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/updateToTrue/:id", (req, res) => {
  const {id} = req.params;
  TodoModels.findByIdAndUpdate({_id:id}, {status: true})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.put("/updateToFalse/:id", (req, res) => {
  const {id} = req.params;
  TodoModels.findByIdAndUpdate({_id:id}, {status: false})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.delete("/delete/:id", (req, res) => {
  const {id} = req.params;
  TodoModels.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is Running");
});
