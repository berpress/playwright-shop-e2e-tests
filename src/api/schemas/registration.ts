import Joi from "joi";

const ADD_REGISTRATION_SCHEMA = Joi.object({
  message: Joi.string(),
  uuid: Joi.number(),
});

export default ADD_REGISTRATION_SCHEMA;