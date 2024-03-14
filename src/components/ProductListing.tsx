"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Skeleton } from './ui/skeleton';
import { cn, formatPrice } from '@/lib/utils';
import { Product } from '@/types';

interface ProductListingProps {
    index: number;
    product: Product | null;
}

export const ProductListing: React.FC<ProductListingProps> = ({ index, product }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const time = setTimeout(() => {
            setIsVisible(true);
        }, index * 75);

        return () => clearTimeout(time);
    }, [index]);

    const validImage = product?.images
        .map(({ image }) => typeof image === 'string' ? image : image.url)
        .filter(Boolean)[0] as string;

    if (isVisible && product) {
        return (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className={cn('invisible h-full cursor-pointer group-[hover:scale-105]',
                    { 'visible animate-in fade-in-5': isVisible })}
            >
                <Link href={`/shop/products/${product.id}`}>
                    <div className='flex flex-col w-full'>
                        <motion.img
                            src={validImage}
                            alt={product.name}
                            className='object-cover'
                            onLoad={() => setIsVisible(true)}
                        />
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-lg font-medium text-gray-900'>{product.name}</h3>
                        <p className='mt-1 text-sm text-gray-500'>{formatPrice(product.price)}</p>
                    </div>
                </Link>
            </motion.div>
        );
    }
    return <ProductPlaceholder />;
};

const ProductPlaceholder: React.FC = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl'>
                <Skeleton className='h-full w-full' />
            </div>
            <Skeleton className='mt-4 w-2/3 h-4 rounded-lg' />
            <Skeleton className='mt-2 w-16 h-4 rounded-lg' />
            <Skeleton className='mt-2 w-12 h-4 rounded-lg' />
        </div>
    );
};

