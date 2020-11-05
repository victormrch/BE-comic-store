const express = require("express");
const router = express.Router();
const comicController = require("../controllers/comic.controller");
// Retrieve all comics
router.get("/", comicController.findAll);
// // Create a new comic
router.post("/", comicController.create);
// Retrieve a comic serie with id
router.get("/:id", comicController.findById);
// // Update a comic with id
router.put("/:id", comicController.update);
// // Delete a comic with id
router.delete("/:id", comicController.delete);
module.exports = router;
