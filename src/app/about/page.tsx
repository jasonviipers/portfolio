"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="items-center justify-center flex">
            <motion.section
                className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        About <br />
                    </h1>
                </div>
                <motion.p className="px-4">
                    I am a software engineer with a passion for building tools and applications that are user-friendly and accessible. I am passionate about learning new technologies and frameworks and I'm always looking for new challenges.
                    My stack includes React, Next.js, TypeScript, Tailwind CSS, and Node.js. I am also familiar with flutter, React Native and dart.
                    When I'm not coding, I'm probably reading, playing video games, traveling, or learning something new.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="px-4"
                >
                    <TracingBeam >
                        <motion.h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Skills
                        </motion.h1>
                        <motion.div className="px-4">
                            <motion.div
                                className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50
                                mb-4">
                                <HoverEffect items={frontendAndBackend} />
                            </motion.div>
                        </motion.div>
                    </TracingBeam>
                </motion.div>
            </motion.section>
        </div>
    )
}

const frontendAndBackend = [
    {
        title: "React",
        description: "I use React to build user interfaces for web applications. I am familiar with hooks, context, and the latest features of React.",
        link: "https://reactjs.org/"
    },
    {
        title: "Next.js",
        description: "I use Next.js to build server-rendered applications, static websites, and hybrid applications. I am familiar with the latest features of Next.js.",
        link: "https://nextjs.org/"
    },
    {
        title: "Flutter",
        description: "I use Flutter to build cross-platform mobile applications. I am familiar with the latest features of Flutter.",
        link: "https://flutter.dev/"
    },
    {
        title: "React Native",
        description: "I use React Native to build cross-platform mobile applications. I am familiar with the latest features of React Native.",
        link: "https://reactnative.dev/"
    },
    {
        title: "TypeScript",
        description: "I use TypeScript to write type-safe JavaScript. I am familiar with the latest features of TypeScript.",
        link: "https://www.typescriptlang.org/"
    },
    {
        title: "Node.js",
        description: "I use Node.js to build server-side applications. I am familiar with the latest features of Node.js.",
        link: "https://nodejs.org/"
    },
    {
        title: "Laravel",
        description: "I use Laravel to build server-side applications. I am familiar with the latest features of Laravel.",
        link: "https://laravel.com/"
    },
    {
        title: "Dockers",
        description: "I use Dockers to containerize applications. I am familiar with the latest features of Dockers.",
        link: "https://www.docker.com/"
    }, {
        title: "Csharp",
        description: "I use Csharp to build server-side applications,Gaming applications and desktop applications. I am familiar with the latest features of Csharp.",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    }, {
        title: "Assembly",
        description: "I use Assembly to reverse engineer application and fix bugs. I am familiar with the latest features of Assembly.",
        link: "https://en.wikipedia.org/wiki/Assembly_language"
    }, {
        title: "C and C++",
        description: "I use C and C++ to build system level applications and Gaming applications. I am familiar with the latest features of C and C++.",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)"
    }

]