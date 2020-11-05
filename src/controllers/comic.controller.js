"use strict";
const Comic = require("../models/comic.model");

exports.findAll = function (req, res) {
  Comic.findAll(function (err, comic) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", comic);
    res.send(comic);
  });
};
exports.findById = function (req, res) {
  Comic.findById(req.params.id, function (err, comic) {
    if (err) res.send(err);
    res.json(comic);
  });
};
exports.create = function (req, res) {
  const new_comic = new Comic(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({
        error: true,
        message: "Proporcione todos los campos obligatorios",
      });
  } else {
    Comic.create(new_comic, function (err, serie) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Comic creado corretamente!",
        data: serie,
      });
    });
  }
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({
        error: true,
        message: "Proporcione todos los campos obligatorios",
      });
  } else {
    Comic.update(req.params.id, new Comic(req.body), function (err, comic) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "¡Comic actualizado correctamente!",
      });
    });
  }
};
exports.delete = function (req, res) {
  Comic.delete(req.params.id, function (err, comic) {
    if (err) res.send(err);
    res.json({ error: false, message: "¡Comic borrado correctamente!" });
  });
};
