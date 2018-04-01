const path = require("path");

const multer = require("multer");
var upload = multer();
const express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.post("/", upload.single("file-uploaded"), (req, res) => {
  var file_name = req.file.originalname;
  var file_size_in_bytes = req.file.size;
  res.send({file_name, file_size_in_bytes});
});

app.listen(port, () => console.log(`Server is live. Port: ${port}`));
