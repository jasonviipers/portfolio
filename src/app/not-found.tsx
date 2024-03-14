import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <Link href="/">
                <Button
                    borderRadius="1.75rem"
                    className="group bg-white 
                    px-7 py-3 flex items-center gap-2 rounded-full 
                    outline-none focus:scale-105 hover:scale-105 
                    active:scale-95 transition borderBlack dark:bg-white/10"
                >
                    Go back home
                </Button>
            </Link>
        </main>
    );
}