"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, ScanEye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ProductReel } from "@/components/ProductReel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()
export default function ShopPage() {
    return (
        <div className="flex items-center justify-center mb-8">
            <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                <div className="flex flex-col items-center justify-center">
                    <motion.h1
                        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <TextGenerateEffect words={Shop} />
                    </motion.h1>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                        <Link href="/shop/products">
                            <Button
                                borderRadius="1.75rem"
                                className="group bg-white 
                            px-7 py-3 flex items-center gap-2 rounded-full 
                            outline-none focus:scale-105 hover:scale-105 
                            active:scale-95 transition borderBlack dark:bg-white/10"
                            >
                                Browse Products
                            </Button>
                        </Link>
                        <Button
                            borderRadius="1.75rem"
                            className="group bg-white 
                        px-7 py-3 flex items-center gap-2 rounded-full 
                        outline-none focus:scale-105 hover:scale-105 
                        active:scale-95 transition borderBlack dark:bg-white/10"
                        >
                            Our quality promise
                        </Button>
                    </div>
                    <QueryClientProvider
                        client={queryClient}>
                        <ProductReel title="Featured Products"
                            query={{ sort: "asc", limit: 4 }}
                            href='/products?sort=recent' />
                    </QueryClientProvider>
                </div>

                <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">

                    <motion.section
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8 lg:gap-y-0 lg:grid-cols-3"
                    >
                        {infoAbout.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * index }}
                                className="text-center md:items-center md:flex md:text-left lg:block lg:text-center"
                            >
                                <div className="flex justify-center md:flex-shrink-0">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full text-primary bg-primary/10">
                                        <info.icon className="w-1/3 h-1/3" />
                                    </div>
                                </div>
                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-base font-medium text-foreground">
                                        {info.name}
                                    </h3>
                                    <p className="mt-3 text-sm text-muted-foreground">
                                        {info.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </motion.section>
                </div>
            </div>
        </div>
    );
}

const Shop = "Your marketplace for high-quality digital asset."
const infoAbout = [
    {
        name: "High Quality assets",
        description: "We offer high-quality digital assets for your projects.",
        icon: ShieldCheck
    },
    {
        name: "Secure",
        description: "Our platform is secure and we guarantee the safety of your data.",
        icon: ScanEye
    },
    {
        name: "Eco-friendly",
        description: "We are committed to reducing our carbon footprint.",
        icon: Leaf
    }
]
