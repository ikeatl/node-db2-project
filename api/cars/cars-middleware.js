const Car = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: `car with id ${req.params.id} is not found` });
    }
    req.car = car;
    next();
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, milage } = req.body;

  if (!vin) {
    return res.status(400).json({ message: "vin is missing" });
  } else if (!make) {
    return res.status(400).json({ message: "make is missing" });
  } else if (!model) {
    return res.status(400).json({ message: "model is missing" });
  } else if (!milage) {
    return res.status(400).json({ message: "milage is missing" });
  }
  next();
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  if (!vinValidator.validate(vin)) {
    return res.status(400).json({ message: `vin ${vin} is invalid` });
  }

  next();
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const existingCar = await Car.getAll().where({ vin: req.body.vin }).first();

    if (existingCar) {
      return res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
