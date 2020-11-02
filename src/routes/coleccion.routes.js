const express = require("express");
const router = express.Router();
const coleccionController = require("../controllers/coleccion.controller");
// Retrieve all collections
router.get("/", coleccionController.findAll);
// // Create a new collection
router.post("/", coleccionController.create);
// Retrieve a single coleccion with id
router.get("/:id", coleccionController.findById);
// // Update a collection with id
router.put("/:id", coleccionController.update);
// // Delete a colecction with id
router.delete("/:id", coleccionController.delete);
module.exports = router;
