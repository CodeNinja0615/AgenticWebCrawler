import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }



    async crawl(url) {
        const visited = new Set();
        if (visited.has(url)) return;
        visited.add(url);

        await browser.url(url);

        const elements = await $$('*');

        const pageData = [];

        for (const el of elements) {
            const tag = await el.getTagName();
            const text = await el.getText();
            const id = await el.getAttribute('id');
            const name = await el.getAttribute('name');

            pageData.push({ tag, text, id, name });
        }

        // Save JSON

        const links = await $$('a');
        for (const link of links) {
            const href = await link.getAttribute('href');
            if (href && href.includes(BASE_DOMAIN)) {
                await crawl(href);
            }
        }
    }


}
