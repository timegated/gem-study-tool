export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model.findOne(req.params.name);
    res.status(200).json({ data: doc });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.find();
    res.status(200).json({ data: docs });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const createOne = (model) => async (req, res) => {
  console.log(req.body);
  try {
    const doc = await model.create(req.body);
    res.status(201).json({ data: doc });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const updateOne = (model) => async (req, res) => {};

export const deleteOne = (model) => async (req, res) => {};

export const crudControllers = (model) => ({
  deleteOne: deleteOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
});
