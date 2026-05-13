"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRepository = void 0;
const reviews_schema_1 = require("./reviews.schema");
class ReviewRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newReview = new reviews_schema_1.ReviewModel(data);
            return yield newReview.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reviews_schema_1.ReviewModel.find()
                .populate('usuarioId', 'nombre')
                .populate('libroId', 'titulo');
        });
    }
    findByBook(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reviews_schema_1.ReviewModel.find({ libroId: bookId }).sort({ createdAt: -1 });
        });
    }
    update(id, usuarioId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reviews_schema_1.ReviewModel.findOneAndUpdate({ _id: id, usuarioId }, { $set: data }, { new: true });
        });
    }
    delete(id, usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reviews_schema_1.ReviewModel.findOneAndDelete({ _id: id, usuarioId });
        });
    }
    findByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reviews_schema_1.ReviewModel.find({ usuarioId: userId });
        });
    }
}
exports.ReviewRepository = ReviewRepository;
