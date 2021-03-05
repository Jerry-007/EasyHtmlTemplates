const express = require("express");
const router = express.Router();
const Template = require("../../models/templateSchema");

router.get("/", (req, res) => {
  Template.find()
    .then((temp) => res.json(temp))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  const newTemplate = new Template({
    Name: req.body.Name,
    Design: JSON.stringify(req.body.Design),
  });
  newTemplate
    .save()
    .then((d) => res.json(`${d.Name} Added`))
    .catch((err) => res.json(err));
});

router.post("/edit/:id", (req, res) => {
  Template.findByIdAndUpdate(
    req.params.id,
    {
      Name: req.body.Name,
      Design: JSON.stringify(req.body.Design),
    },
    { new: true }
  )
    .then((d) => res.json(`${d.Name} Edited`))
    .catch((err) => res.json(err));
});

module.exports = router;
