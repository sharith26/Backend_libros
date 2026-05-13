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
exports.ReviewService = void 0;
const reviews_repository_1 = require("./reviews.repository");
class ReviewService {
    constructor() {
        this.repository = new reviews_repository_1.ReviewRepository();
    }
    addReview(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.create(data);
        });
    }
    getAllReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAll();
        });
    }
    getBookReviews(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findByBook(bookId);
        });
    }
    updateReview(id, usuarioId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.update(id, usuarioId, data);
        });
    }
    deleteReview(id, usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(id, usuarioId);
        });
    }
}
exports.ReviewService = ReviewService;
