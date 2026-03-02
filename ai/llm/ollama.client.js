import axios from 'axios';

export async function askLLM(prompt) {
    try {
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'deepseek-coder:1.3b',
            prompt: prompt,
            stream: false
        });

        return response.data.response;
    } catch (error) {
        console.error('LLM Error:', error.message);
        return null;
    }
}