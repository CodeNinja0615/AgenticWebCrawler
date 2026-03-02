import { askLLM } from '../../ai/llm/ollama.client.js';

describe('LLM Integration Check', () => {

    it('should generate a simple Jasmine WebdriverIO test', async () => {

        const prompt = `
        You are a senior automation engineer.
        Write a simple WebdriverIO test using Jasmine framework
        that verifies Google title contains "Google".
        Only return code.
        `;

        const result = await askLLM(prompt);

        console.log("\n===== LLM OUTPUT =====\n");
        console.log(result);

        expect(result).toBeTruthy();
    });

});