import { SubCategory } from "../../models/subCategory.model";
import { Types } from "mongoose";
import {
  ISubCategory,
  ISubCategoryCreateUpdate,
} from "../../types/admin/subCategory.types";

/* count all documents */
const countAll = async (): Promise<number> => {
  return await SubCategory.countDocuments();
};

/* find all reosurce by paginate */
const findAll = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<ISubCategory[] | []> => {
  return await SubCategory.find()
    .sort({ _id: -1 })
    .skip(page * limit - limit)
    .limit(limit)
    .exec();
};

/* specific resource find one by key */
const findOneByKey = async (data: any): Promise<ISubCategory | null> => {
  return await SubCategory.findOne({ ...data });
};

/* create new resource */
const createResource = async ({
  data,
}: {
  data: ISubCategoryCreateUpdate;
}): Promise<ISubCategory | null> => {
  const newSubCategory = new SubCategory({
    category: data.category,
    name: data.name,
    logo: data.logo,
    banner_image: data.logo,
  });
  return await newSubCategory.save();
};

/* Search by key */
const searchByKey = async ({
  query,
}: {
  query: string;
}): Promise<ISubCategory[] | []> => {
  const queryRegExp = new RegExp(query, "i");
  return await SubCategory.find(
    {
      $or: [{ name: queryRegExp }],
    },
    {
      created_by: 0,
    }
  );
};

/* find one specific resource */
const findOneById = async ({
  _id,
}: {
  _id: Types.ObjectId;
}): Promise<ISubCategory | null> => {
  return await SubCategory.findById(_id).populate("category", "name");
};

/* find specific resource by update */
const findByIdAndUpdate = async ({
  _id,
  data,
}: {
  _id: Types.ObjectId;
  data: ISubCategoryCreateUpdate;
}): Promise<ISubCategory | null> => {
  return await SubCategory.findByIdAndUpdate(_id, { $set: { ...data } });
};

/* find specific resource by delete */
const findByIdAndDelete = async ({
  _id,
}: {
  _id: Types.ObjectId;
}): Promise<ISubCategory | null> => {
  return await SubCategory.findByIdAndDelete(_id);
};

export const adminSubCategoryService = {
  findAll,
  countAll,
  findOneById,
  searchByKey,
  findOneByKey,
  createResource,
  findByIdAndUpdate,
  findByIdAndDelete,
};
