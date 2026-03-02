import fs from 'fs';
import path from 'path';

describe('AI Website Crawler', () => {

    it('should crawl homepage and store structured data', async () => {

        const baseUrl = 'https://rahulshettyacademy.com/locatorspractice/'; // change later
        await browser.url(baseUrl);

        const inputs = await $$('input');
        const buttons = await $$('button');
        const links = await $$('a');

        const pageData = {
            url: baseUrl,
            inputs: [],
            buttons: [],
            links: []
        };

        for (const input of inputs) {
            pageData.inputs.push({
                id: await input.getAttribute('id'),
                name: await input.getAttribute('name'),
                type: await input.getAttribute('type')
            });
        }

        for (const button of buttons) {
            pageData.buttons.push({
                text: await button.getText(),
                id: await button.getAttribute('id')
            });
        }

        for (const link of links) {
            pageData.links.push({
                text: await link.getText(),
                href: await link.getAttribute('href')
            });
        }

        const filePath = path.resolve('./ai/memory/site-data.json');
        fs.writeFileSync(filePath, JSON.stringify(pageData, null, 2));

        console.log("Crawl complete. Data stored.");

        expect(pageData).toBeTruthy();
    });

});