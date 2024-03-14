import { siteSettings } from "./site.settings";

export const Seo ={
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.url.ie/',
        site_name: siteSettings.name,
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
}