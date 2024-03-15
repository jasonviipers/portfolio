"use client";

import { AuthModal } from "@/components/AuthModal";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

interface ShopLayoutProps {
    product?: Product;
}

export function ModalProvider({ product }: ShopLayoutProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <>
            <AuthModal />
        </>
    )
}


export function ShopProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>
                {children}
            </ReactQueryStreamedHydration>
        </QueryClientProvider>
    )
}