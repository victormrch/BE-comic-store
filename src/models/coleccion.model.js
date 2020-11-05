"use strict";
var dbConn = require("./../../config/db.config");

//Coleccion object create
var Coleccion = function (coleccion) {
  this.nombreColeccion = coleccion.nombreColeccion;
};
Coleccion.create = function (newColl, result) {
  dbConn.query("INSERT INTO coleccion set ?", newColl, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Coleccion.findById = function (id, result) {
  dbConn.query("Select * from coleccion where id = ? ", id, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Coleccion.findAll = function (result) {
  dbConn.query("Select * from coleccion", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("coleccion : ", res);
      result(null, res);
    }
  });
};
Coleccion.findAllComicAndSerieByIdColeccion = function (id, result) {
  dbConn.query(
    "SELECT * FROM coleccion inner join serie on coleccion.id = serie.coleccionId inner join comic on serie.id = comic.serieId where coleccion.id =?;",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Coleccion.update = function (id, coleccion, result) {
  dbConn.query(
    "UPDATE coleccion SET nombreColeccion=? WHERE id = ?",
    [coleccion.nombreColeccion, id],
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
Coleccion.delete = function (id, result) {
  dbConn.query("DELETE FROM coleccion WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Coleccion;
