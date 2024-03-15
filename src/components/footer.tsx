import { siteSettings } from "@/settings/site.settings";

export function Footer() {
    return (
        <footer className="fixed bottom-0 w-full px-4 text-center text-gray-500 dark:text-gray-400">
            <small className="mb-2 block text-xs">
                &copy; {new Date().getFullYear()} <b>{siteSettings.author.name}</b> | All rights reserved
            </small>
            <p className="text-xs">
                {/* Made with <span className="text-red-500">&hearts;</span> by <a href={siteSettings.author.url} className="hover:underline">{siteSettings.author.name}</a> */}
            </p>
        </footer>
    );
}
