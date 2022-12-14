import { Router } from "express";
import { cartRouter } from "./user/cart.route";
import { UserRouter } from "./user/user.route";
import { orderRouter } from "./user/order.route";
import { AdminRouter } from "./admin/admin.route";
import { productRouter } from "./admin/product.route";
import { categoryRouter } from "./admin/category.route";
import { userProductRouter } from "./user/product.route";
import { userCategoryRouter } from "./user/category.route";
import { subCategoryRoute } from "./admin/subCategory.route";
import { userSubCategoryRouter } from "./user/subCategory.route";
import { userPermission } from "../middleware/user.permission.middleware";
import { adminPermission } from "../middleware/admin.permission.middleware";
import { adminOrderRouter } from './admin/order.route';


export const AppRouter: Router = Router();
AppRouter.use("/admin/auth", AdminRouter);
AppRouter.use("/admin/Product", adminPermission, productRouter);
AppRouter.use("/admin/category", adminPermission, categoryRouter);
AppRouter.use("/admin/sub-category", adminPermission, subCategoryRoute);
AppRouter.use("/admin/order", adminPermission, adminOrderRouter);

/* user routes */
AppRouter.use("/user/auth", UserRouter);
AppRouter.use("/product", userProductRouter);
AppRouter.use("/category", userCategoryRouter);
AppRouter.use("/cart",userPermission, cartRouter)
AppRouter.use("/order",userPermission, orderRouter)
AppRouter.use("/sub-category", userSubCategoryRouter);
