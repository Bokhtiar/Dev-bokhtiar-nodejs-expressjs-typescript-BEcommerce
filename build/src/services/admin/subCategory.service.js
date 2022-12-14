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
exports.adminSubCategoryService = void 0;
const subCategory_model_1 = require("../../models/subCategory.model");
/* count all */
const countAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield subCategory_model_1.SubCategory.countDocuments();
});
/* find all reosurce by paginate */
const findAll = ({ page, limit, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subCategory_model_1.SubCategory.find()
        .sort({ _id: -1 })
        .skip(page * limit - limit)
        .limit(limit)
        .exec();
});
/* specific resource find one by key */
const findOneByKey = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subCategory_model_1.SubCategory.findOne(Object.assign({}, data));
});
/* create new resource */
const subcategoryCreate = ({ documents, }) => __awaiter(void 0, void 0, void 0, function* () {
    const newSubCategory = new subCategory_model_1.SubCategory({
        category: documents.category,
        name: documents.name,
        logo: documents.logo,
        banner_image: documents.logo,
    });
    return yield newSubCategory.save();
});
/* find one specific resource */
const findOneById = ({ _id, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subCategory_model_1.SubCategory.findById(_id).populate("category", "name");
});
/* find specific resource by update */
const findOneByIdAndUpdate = ({ _id, documents, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subCategory_model_1.SubCategory.findByIdAndUpdate(_id, { $set: Object.assign({}, documents) });
});
/* find specific resource by delete */
const findOneByIdAndDelete = ({ _id, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subCategory_model_1.SubCategory.findByIdAndDelete(_id);
});
/* Search by key */
const searchByKey = ({ query, }) => __awaiter(void 0, void 0, void 0, function* () {
    const queryRegExp = new RegExp(query, "i");
    return yield subCategory_model_1.SubCategory.find({
        $or: [{ name: queryRegExp }],
    }, {
        created_by: 0,
    });
});
exports.adminSubCategoryService = {
    findAll,
    countAll,
    findOneById,
    searchByKey,
    findOneByKey,
    subcategoryCreate,
    findOneByIdAndUpdate,
    findOneByIdAndDelete,
};
