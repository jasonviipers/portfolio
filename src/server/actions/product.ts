// "use server"
// import { createSafeActionClient } from "next-safe-action";
// import { eq, and, desc } from "drizzle-orm";
// import { db } from "../db";
// import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "../validation";
// import { auth } from "../auth";
// import { product } from "../db/schema";

// export const action = createSafeActionClient();

// export const createProduct = action(createProductSchema, async ({ name,description,price,image,category }) => {
//     const session = await auth();
//    if(!session){
//        throw new Error("Not authorized")
//    }
//     return db.product.insert({
//         name,
//         description,
//         price,
//         image,
//         category,
//         createdById: session.user?.id,
//     });
// });

// export const updateProduct = action(updateProductSchema, async ({ id, name,description,price,image,category }) => {
//     const session = await auth();
//     if(!session){
//         throw new Error("Not authorized")
//     }
//     return db.product.update({
//         name,
//         description,
//         price,
//         image,
//         category,
//         createdById: session.user?.id,
//     }, {
//         where: {
//             id: eq(product.id, id),
//         },
//     });
// });

// export const deleteProduct = action(deleteProductSchema, async ({ id }) => {
//     const session = await auth();
//     if(!session){
//         throw new Error("Not authorized")
//     }
//     return db.product.delete({
//         where: {
//             id: eq(product.id, id),
//         },
//     });
// });

// export const getProduct = action(getProductSchema ,async ({id}) => {
//     return db.product.find({
//         where: {
//             id: eq(product.id, id),
//         },
//     });
// });



