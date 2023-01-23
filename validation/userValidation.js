const Joi = require("joi");

const userValidator = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email(),
});

// a validation middleware for the inputs
const userValidationMiddleware = async (req, res, next) => {
  const payload = req.body;
  try {
    await userValidator.validateAsync(payload);
    next();
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400,
    });
  }
};

module.exports = userValidationMiddleware;
