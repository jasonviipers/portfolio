"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ScrollArea } from './ui/scroll-area';
import { CartItem } from './CartItem';
import { cn, formatPrice } from '@/lib/utils';
import { buttonVariants } from './ui/button';

export const Cart = ({ items }: { items: any[] }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const itemsCount = items?.length || 0;
    const fee = 0;
    const cartTotal = items.reduce((acc, item) => acc + item.price, 0);

    useEffect(() => {
        setIsMounted(true);

    }, []);

    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2 relative'>
                {itemsCount > 0 && (
                    <div className='absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 bg-primary-500 rounded-full text-xs text-white'>
                        <span className='text-sm font-medium'>
                            {isMounted ? itemsCount : 0}
                        </span>
                    </div>
                )}
                <ShoppingCart aria-hidden className='w-6 h-6' />
            </SheetTrigger>
            <SheetContent className={cn('flex w-full flex-col pr-0  bg-slate-900/35')}>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart ({itemsCount})</SheetTitle>
                </SheetHeader>
                {itemsCount > 0 ? (
                    <>
                        <div className='flex w-full flex-col pr-6'>
                            <ScrollArea>
                                {items.map((item) => (
                                    <CartItem key={item.id} product={item} />
                                ))}
                            </ScrollArea>
                        </div>
                        <div className='space-y-4 pr-6'>
                            <div className='border-t border-muted-foreground' />
                            <div className='space-y-1.5 text-sm'>
                                <div className="flex justify-between">
                                    <span className='font-medium'>
                                        Shipping
                                    </span>
                                    <span className='font-medium'>
                                        Free
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>
                                        Transaction Fee
                                    </span>
                                    <span>
                                        {formatPrice(fee)}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>
                                        Total
                                    </span>
                                    <span>
                                        {formatPrice(cartTotal + fee)}
                                    </span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href='/cart' className={buttonVariants({ className: 'w-full' })}>
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div aria-hidden='true' className='relative mb-4 h-60 w-60 text-muted-foreground justify-center items-center'>
                            <ShoppingCart className='flex items-center justify-center w-full h-full' />
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};