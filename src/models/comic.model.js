"use strict";
var dbConn = require("./../../config/db.config");

//Comic object create
var Comic = function (comic) {
  this.comprado = comic.comprado;
  this.editorial = comic.editorial;
  this.fecha_lanzamiento = comic.fecha_lanzamiento;
  this.numPaginas = comic.numPaginas;
  this.portada = comic.portada;
  this.precio = comic.precio;
  this.tipo = comic.tipo;
  this.titulo = comic.titulo;
  this.url_compra = comic.url_compra;
  this.serieId = comic.serieId;
};

Comic.create = function (newCom, result) {
  dbConn.query("INSERT INTO comic set ?", newCom, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Comic.findById = function (id, result) {
  dbConn.query("Select * from comic where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Comic.findAll = function (result) {
  dbConn.query("Select * from comic", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("comic: ", res);
      result(null, res);
    }
  });
};
Comic.update = function (id, comic, result) {
  dbConn.query(
    "UPDATE comic SET comprado=?,editorial=?,fecha_lanzamiento=?, numPaginas=?, portada=?, precio=?, tipo=?, titulo=?, url_compra=?, serieId=?, WHERE id = ?",
    [
      comic.comprado,
      comic.editorial,
      comic.fecha_lanzamiento,
      comic.numPaginas,
      comic.portada,
      comic.precio,
      comic.tipo,
      comic.titulo,
      comic.url_compra,
      comic.serieId,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Comic.delete = function (id, result) {
  dbConn.query("DELETE FROM comic WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Comic;
