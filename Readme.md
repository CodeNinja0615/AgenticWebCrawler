#
User Input:
  - Base URL
  - Test Case (TC)

        ↓

Crawler Agent (WebdriverIO headless)
        ↓
Extract DOM + Forms + APIs
        ↓
Store structured JSON

        ↓

Planner Agent (Ollama)
        ↓
Break TC into steps

        ↓

Code Generator Agent (Ollama)
        ↓
Generate WDIO test in your framework structure

        ↓

File Maintainer Agent
        ↓
Create / Update test file




// These call Olama api
npm install axios
npm install fs-extra

curl -fsSL https://ollama.com/install.sh | sh // Olama installer

ollama pull deepseek-coder:1.3b //pull deepseek-coder with 1.3 Billion params

ollama run deepseek-coder:1.3b //Run llm