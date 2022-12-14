import { Schema, model } from "mongoose";
import { ICategory } from "../types/admin/category.types";

const categorySchema: Schema = new Schema<ICategory>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    banner_image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = model<ICategory>("Category", categorySchema);
