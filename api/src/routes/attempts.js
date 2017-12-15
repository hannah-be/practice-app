const express = require("express");
const Attempt = require("../models/attempt");

const router = express.Router();

// Read all
router.get("/attempts", (req, res) => {
  Attempt.find().then(attempts => {
    res.json(attempts);
  });
});

// Read individual
router.get("/attempt/:id", (req, res) => {
  const id = req.params.id;
  Attempt.findById(id)
    .then(attempt => {
      if (attempt) {
        res.json(attempt);
      } else {
        res.status(404).json({ error: `Attempt not found with id: ${id}` });
      }
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Create
router.post("/attempt", (req, res) => {
  const attributes = req.body;
  Attempt.create(attributes)
    .then(attempt => {
      res.status(201).json(attempt);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Update
router.patch("/attempt/:id", (req, res) => {
  const id = req.params.id;
  const attributes = req.body;
  Attempt.findByIdAndUpdate(id, attributes, { new: true, runValidators: true })
    .then(attempt => {
      if (attempt) {
        res
          .status(200)
          .json({ message: `You've updated the record for ${attempt.id}` });
      } else {
        res.status(404).json({ error: error });
      }
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Destroy
router.delete("/attempts/:id", (req, res) => {
  const id = req.params.id;
  Attempts.findByIdAndRemove(id)
    .then(attempt => {
      if (attempt) {
        res.json(attempt);
      } else {
        res.status(404).json({ error: error.message });
      }
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
