const express = require("express");

// importing in CRUD functions from controllers
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

// init of router
const router = express.Router();

// invoke CRUD functions
router
    .route("/")
    .get(getBootcamps)
    .post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
