"use strict";
const Coleccion = require("../models/coleccion.model");
exports.findAll = function (req, res) {
  Coleccion.findAll(function (err, coleccion) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", coleccion);
    res.send(coleccion);
  });
};
exports.findById = function (req, res) {
  Coleccion.findById(req.params.id, function (err, coleccion) {
    if (err) res.send(err);
    res.json(coleccion);
  });
};

exports.findAllComicAndSerieByIdColeccion = function (req, res) {
  Coleccion.findAllComicAndSerieByIdColeccion(req.params.id, function (
    err,
    coleccion
  ) {
    if (err) res.send(err);
    res.json(coleccion);
  });
};
exports.create = function (req, res) {
  const new_coleccion = new Coleccion(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Proporcione todos los campos obligatorios",
    });
  } else {
    Coleccion.create(new_coleccion, function (err, coleccion) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "¡Colección creada corretamente!",
        data: coleccion,
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
    Coleccion.update(req.params.id, new Coleccion(req.body), function (
      err,
      coleccion
    ) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "¡Colección actualizada correctamente!",
      });
    });
  }
};
exports.delete = function (req, res) {
  Coleccion.delete(req.params.id, function (err, coleccion) {
    if (err) res.send(err);
    res.json({ error: false, message: "¡Colección borrada correctamente!" });
  });
};
