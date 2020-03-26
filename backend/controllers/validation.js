const Joi = require('@hapi/joi');

const registerValidation = bodyData => {
    const registerSchema = Joi.object({
        user_name: Joi.string().min(6).required(),
        user_password: Joi.string().min(6).required(),
        first_name: Joi.string().min(6).required(),
        last_name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email()
    });

    return registerSchema.validate(bodyData);
}

const loginValidation = bodyData => {
    const loginSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        user_password: Joi.string().min(6).required()
    });

    return loginSchema.validate(bodyData);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
