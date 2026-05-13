"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressModel = void 0;
const mongoose_1 = require("mongoose");
const progressSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
    currentPage: { type: Number, default: 0 },
    totalPages: { type: Number, required: true },
    status: {
        type: String,
        enum: ['reading', 'finished', 'dropped'],
        default: 'reading'
    },
    startDate: { type: Date, default: Date.now },
    finishDate: { type: Date }
});
exports.ProgressModel = (0, mongoose_1.model)('Progress', progressSchema);
