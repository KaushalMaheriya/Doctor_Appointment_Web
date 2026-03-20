const Joi = require('joi');

const Doctorvalidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        fees: Joi.string().min(3).max(5).required(),
        education: Joi.string().min(1).max(50).required(),
        type: Joi.string().min(4).max(25).required(),
        timeduration: Joi.string().min(8).max(12).required(),
        days: Joi.string().min(3).max(50).required()
    });
    const { err } = schema.validate(req.body)
    if (err) {
        return res.status(400).json({
            message: "Bad request", error,
            details: error.details[0].message
        })
    }next();
}
module.exports = {
    Doctorvalidation
}