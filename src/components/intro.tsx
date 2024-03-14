"use client";
import { motion } from "framer-motion"
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { Download, Github, Linkedin, MoveRight } from "lucide-react";
import { Button } from "./ui/moving-border";


export const Intro = () => {
    const words2 = `
    I'm a Full Stack Developer with 5 years of experience. I specialize in building web applications using modern technologies.
    `
    // Building tools and applications that are user-friendly and accessible is what I love to do. I'm passionate about learning new technologies and frameworks and I'm always looking for new challenges.
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center mb-8">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    ></motion.div>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <TextGenerateEffect words={words2} />
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center"
            >
                <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
                    <Button
                        onClick={() => { window.location.href = "mailto:jason@chatr.fr" }}
                        borderRadius="1.75rem"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition"
                    >
                        Contact Me

                    </Button>
                    <Button
                        borderRadius="1.75rem"
                        className="group bg-white 
                        px-7 py-3 flex items-center gap-2 rounded-full 
                        outline-none focus:scale-105 hover:scale-105 
                        active:scale-95 transition borderBlack dark:bg-white/10"
                    >
                        Download Resume
                        <Download className="opacity-70 group-hover:translate-x-0.5 transition" />

                    </Button>

                    <Link href="#github"
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
                        aria-label="github"
                    >
                        <Github className="opacity-70 group-hover:translate-x-0.5 transition" />
                    </Link>
                    <Link href="#linkedin"
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
                        aria-label="linkedin"
                    >
                        <Linkedin className="opacity-70 group-hover:translate-x-0.5 transition" />
                    </Link>

                </div>
            </motion.div>
        </section>
    )
}