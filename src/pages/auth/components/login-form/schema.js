import Joi from 'joi-browser';

const schema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required()
    .min(7),
});

export default schema;
