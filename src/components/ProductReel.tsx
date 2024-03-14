"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {useQuery} from '@tanstack/react-query';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { ProductListing } from './ProductListing';

interface ProductReelProps {
    title: string
    subtitle?: string
    href?: string
    query?: string
}

export const ProductReel: React.FC<ProductReelProps> = ({ title, subtitle, href, query }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await fetch('/api/products');
            return res.json();
        },
    });

    return (
        <div className='py-12'>
            <div className='md:flex md:items-center md:justify-between mb-4'>
                <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
                    {title && (
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                            <TextGenerateEffect words={title} />
                        </motion.h1>
                    )}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className='mt-2 text-sm text-muted-foreground'>
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
            <div className='flex justify-center'>
                <Link href={href || ''}
                    className='hidden text-sm font-medium text-gray-900 sm:block hover:underline'>
                    Shop Now
                    <span aria-hidden='true'>&rarr;</span>
                </Link>
            </div>
            <div className="relative">
                <div className='mt-6 flex items-center w-full'>
                    <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
                        {/* {
                            isLoading ? (
                                Array.from({ length: 4 }, (_, i) => (
                                    <div key={i} className='w-full'>
                                        <ProductListing index={i} products={null} />
                                    </div>
                                ))
                            ) : data?.map((products, i) => (
                                <div key={i} className='w-full'>
                                    <ProductListing index={i} products={products} />
                                </div>
                            ))
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
}