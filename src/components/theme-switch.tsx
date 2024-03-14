"use client"

import * as React from "react"
import { Icons } from "./icons"
import { useThemeContext } from "@/context/theme-context"
import { motion } from "framer-motion";


export function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Light Mode" : "Dark Mode"}
      className="fixed bottom-5 right-5 bg-white dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
    >
      {theme === "light" ? (
        <motion.div className="w-6 h-6" animate={{ rotate: 360 }} transition={{ duration: 2 }}>
          <Icons.sun />
        </motion.div>
      ) : (
        <motion.div className="w-6 h-6" animate={{ rotate: 360 }} transition={{ duration: 2 }}>
          <Icons.moon />
        </motion.div>
      )}
    </motion.button>

  )
}