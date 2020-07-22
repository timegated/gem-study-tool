"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.deleteOne = exports.updateOne = exports.createOne = exports.getMany = exports.getOne = void 0;

const getOne = model => async (req, res) => {};

exports.getOne = getOne;

const getMany = model => async (req, res) => {};

exports.getMany = getMany;

const createOne = model => async (req, res) => {
  try {
    model.create(req.body);
  } catch (error) {
    res.status(400).end();
  }
};

exports.createOne = createOne;

const updateOne = model => async (req, res) => {};

exports.updateOne = updateOne;

const deleteOne = model => async (req, res) => {};

exports.deleteOne = deleteOne;

const crudControllers = model => ({
  deleteOne: deleteOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});

exports.crudControllers = crudControllers;