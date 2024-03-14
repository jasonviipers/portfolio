import { Toaster } from "react-hot-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Seo } from "@/settings/seo.settings";
import { siteSettings } from "@/settings/site.settings";
import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google"
import { ThemeSwitch } from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: siteSettings.name,
  description: siteSettings.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  socials: siteSettings.socials,
  authors: siteSettings.author,
  creator: siteSettings.author,
  openGraph: Seo.openGraph,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        " bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36",
        fontSans.variable
      )}>
        {/* <div className="bg-[#a5ffec] dark:bg-[#2dd4bf] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" /> */}
        {/* <div className="bg-[#fbc0ff] dark:bg-[#a855f7] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" /> */}
        <ThemeContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <aside>
              <Toaster
                position="top-right"
                toastOptions={{
                  className: "dark:bg-white/10 dark:text-white/80",
                }}
              />
            </aside>
            <ThemeSwitch />
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
