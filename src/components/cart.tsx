"use client";
import { ShoppingCart } from 'lucide-react';

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { CartItem } from './CartItem';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Image from 'next/image';

export const Cart = ({ items }: { items: any[] }) => {
    const itemsCount = items?.length
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const fee = 0;
    const cartTotal = items.reduce((acc, item) => acc + item.price, 0);
    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCart aria-hidden
                    className='w-6 h-6 group-hover:scale-105'
                />
                <span className='ml-2 text-sm font-medium'>
                    {isMounted ? itemsCount : 0}
                </span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
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
                                <div className="fkex">
                                    <span className='flex-1 font-medium'>
                                        Shipping
                                    </span>
                                    <span className='font-medium'>
                                        Free
                                    </span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>
                                        Transaction Fee
                                    </span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>
                                        {formatPrice(cartTotal + fee)}
                                    </span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href='/cart'
                                        className={buttonVariants({
                                            className: 'w-full',
                                        })}>
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div
                            aria-hidden='true'
                            className='relative mb-4 h-60 w-60 text-muted-foreground'>
                            <Image
                                src='/empty-cart.svg'
                                layout='fill'
                                alt='Empty cart'
                            />
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};