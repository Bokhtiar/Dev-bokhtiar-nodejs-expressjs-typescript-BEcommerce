import { Schema, model } from "mongoose";
import { IAdmin } from "../types/admin/admin.types";

const adminSchema: Schema = new Schema<IAdmin>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Admin = model<IAdmin>("Admin", adminSchema);
