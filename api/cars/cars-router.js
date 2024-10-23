// DO YOUR MAGIC
const express = require("express");
const Cars = require("./cars-model");
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware");

const router = express.Router();

//get all cars: /api/cars
router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

//get /api/cars/:id by id

router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    res.status(200).json(req.car);
  } catch (err) {
    next(err);
  }
});

// post /api/cars - create a new car
router.post("/", checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
  try {
    const newCar = await Cars.create(req.body);
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
  try {
    const uodatedCar = await Cars.update(req.params.id, req.body);
    res.status(200).json(uodatedCar);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkCarId, async (req, res, next) => {
  try {
    const deletedCar = await Cars.remove(req.params.id);
    res.status(200).json({ message: "Car successfully deleted" });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
