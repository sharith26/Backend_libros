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
exports.ProgressService = void 0;
const progress_repository_1 = require("./progress.repository");
class ProgressService {
    constructor() {
        this.repository = new progress_repository_1.ProgressRepository();
    }
    saveProgress(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const percentage = (data.currentPage / data.totalPages) * 100;
            if (percentage >= 100) {
                data.status = 'finished';
                data.finishDate = new Date();
            }
            const result = yield this.repository.updateProgress(data);
            return Object.assign(Object.assign({}, result === null || result === void 0 ? void 0 : result.toObject()), { percentage: percentage.toFixed(2) + '%' });
        });
    }
    getUserLibrary(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findByUser(userId);
        });
    }
}
exports.ProgressService = ProgressService;
