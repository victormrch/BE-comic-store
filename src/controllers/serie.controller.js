"use strict";
const Serie = require("../models/serie.model");
exports.findAll = function (req, res) {
  Serie.findAll(function (err, serie) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", serie);
    res.send(serie);
  });
};
exports.findById = function (req, res) {
  Serie.findById(req.params.id, function (err, serie) {
    if (err) res.send(err);
    res.json(serie);
  });
};
exports.create = function (req, res) {
  const new_serie = new Serie(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({
        error: true,
        message: "Proporcione todos los campos obligatorios",
      });
  } else {
    Serie.create(new_serie, function (err, serie) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "¡Serie creada corretamente!",
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
    Serie.update(req.params.id, new Serie(req.body), function (err, serie) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "¡Serie actualizada correctamente!",
      });
    });
  }
};
exports.delete = function (req, res) {
  Serie.delete(req.params.id, function (err, serie) {
    if (err) res.send(err);
    res.json({ error: false, message: "¡Serie borrada correctamente!" });
  });
};
