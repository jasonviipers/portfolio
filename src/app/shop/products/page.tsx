import { ProductReel } from "@/components/ProductReel"

type Param = string | string[] | undefined

interface ProductsPageProps {
    searchParams: { [key: string]: Param }
}

const parse = (param: Param) => {
    if (Array.isArray(param)) {
        return param[0]
    }
    return param
}
export default function ProductsPage({ searchParams }: ProductsPageProps) {
    const sort = parse(searchParams.sort)
    const category = parse(searchParams.category)
    const label = category ? `Products in ${category}` : 'Products'
    return (
        <div className="flex items-center justify-center mb-8">
            <ProductReel 
                title={label === 'Products' ? 'Featured Products' : label}
                query={{
                    category,
                    limit: 20,
                    sort:
                      sort === 'desc' || sort === 'asc'
                        ? sort
                        : undefined,
                  }}
            />
        </div>
    );
}