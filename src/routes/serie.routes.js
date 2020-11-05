const express = require("express");
const router = express.Router();
const serieController = require("../controllers/serie.controller");
// Retrieve all series
router.get("/", serieController.findAll);
// // Create a new serie
router.post("/", serieController.create);
// Retrieve a single serie with id
router.get("/:id", serieController.findById);
// Retrieve all comic in a serie with id
router.get("/comic/:id", serieController.findAllComicByIdSerie);
// // Update a serie with id
router.put("/:id", serieController.update);
// // Delete a serie with id
router.delete("/:id", serieController.delete);
module.exports = router;
