import fs from 'fs';
import path from 'path';
import { askLLM } from '../../ai/llm/ollama.client.js';

describe('AI Test Generator', () => {

    it('should generate WDIO Jasmine test from crawled data', async () => {

        const memoryPath = path.resolve('./ai/memory/site-data.json');
        const outputPath = path.resolve('./ai/generated/generated-test.txt');

        const siteData = JSON.parse(fs.readFileSync(memoryPath, 'utf-8'));

        const testCase = `
            Verify user can enter username and password 
            and click SIGN IN button.
        `;

        const prompt = `
            You are a senior automation engineer using WebdriverIO with Jasmine.

            Test Case:
            ${testCase}

            Use ONLY selectors from this JSON:

            ${JSON.stringify(siteData, null, 2)}

            Rules:
            - Do not hallucinate selectors
            - Read selectors properly
            - All attribute selectors must use double quotes inside
            - Wrap selectors in single quotes
            - Use async/await
            - Return only valid JavaScript
            - Do not add explanations

            Write a complete test.
        `;

        const result = await askLLM(prompt);

        // Save to TXT file
        fs.writeFileSync(outputPath, result);

        console.log("\nTest generated and saved to:");
        console.log(outputPath);

        expect(result).toBeTruthy();
    });
});