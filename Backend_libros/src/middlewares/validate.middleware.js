"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: 'Validation Error',
            errors: result.error.flatten()
        });
    }
    req.body = result.data;
    next();
};
exports.validate = validate;
