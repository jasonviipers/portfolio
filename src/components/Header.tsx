'use client';
import { LINKS } from "@/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cart } from "./cart";

interface HeaderProps {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    return (
        <header className={`relative z-[999] ${className}`}>
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            />
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex items-center space-x-4">
                    {LINKS.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                        >
                            <Link href={link.hash} className={cn("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
                                "!text-gray-950 font-medium dark:!text-gray-100"
                            )}>
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                    {/* <Cart items={[
                        // {
                        //     id: 1,
                        //     name: 'Product 1',
                        //     price: 100,
                        //     images: [
                        //         {
                        //             image: {
                        //                 url: 'https://via.placeholder.com/150'
                        //             }
                        //         }
                        //     ]
                        // },
                        // {
                        //     id: 2,
                        //     name: 'Product 2',
                        //     price: 200,
                        //     images: [
                        //         {
                        //             image: {
                        //                 url: 'https://via.placeholder.com/150'
                        //             }
                        //         }
                        //     ]
                        // }
                    ]} /> */}
                </ul>
            </nav>
        </header>
    )
}
// https://github.com/sanidhyy/portfolio/blob/main/constants/index.ts

// https://www.algochurn.com/