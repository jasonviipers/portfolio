'use client';
import { ModalProvider } from "@/components/ModalProvider";


interface ShopLayoutProps {
    children: React.ReactNode;
}
export default async function ShopLayout({ children }: ShopLayoutProps) {
    const products = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json());

    return (
        <div className="items-center justify-center flex ">
            {/* <ModalProvider product={products} /> */}
            {children}
        </div>
    )
}