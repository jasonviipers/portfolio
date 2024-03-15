import * as z from "zod"

export const createProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.string()
})

export type CreateProduct = z.infer<typeof createProductSchema>

export const updateProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.string()
})

export type UpdateProduct = z.infer<typeof updateProductSchema>

export const deleteProductSchema = z.object({
    id: z.string()
})

export type DeleteProduct = z.infer<typeof deleteProductSchema>

export const getProductSchema = z.object({
    id: z.string()
})

export type GetProduct = z.infer<typeof getProductSchema>

export const getProductsSchema = z.object({
    category: z.string()
})

export type GetProducts = z.infer<typeof getProductsSchema>
