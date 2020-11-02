"use strict";
var dbConn = require("./../../config/db.config");

//Serie object create
var Serie = function (serie) {
  this.nombreSerie = serie.nombreSerie;
  this.coleccionId = serie.coleccionId;
};

Serie.create = function (newSer, result) {
  dbConn.query("INSERT INTO serie set ?", newSer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Serie.findById = function (id, result) {
  dbConn.query("Select * from serie where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Serie.findAll = function (result) {
  dbConn.query("Select * from serie", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("serie : ", res);
      result(null, res);
    }
  });
};
Serie.update = function (id, serie, result) {
  dbConn.query(
    "UPDATE serie SET nombreSerie=?,coleccionId=? WHERE id = ?",
    [serie.nombreSerie, serie.coleccionId, id],
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
Serie.delete = function (id, result) {
  dbConn.query("DELETE FROM serie WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Serie;
