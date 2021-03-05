const express = require("express");
const mongoose = require("mongoose");
const path = require('path')

const routes = require("./routes/api/template");
const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;
const dbUrl =
  "mongodb+srv://Jerry:Jerry007@cluster0.zg5i0.mongodb.net/database?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/api/template", routes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client/build/index.html'));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
