const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


console.log(process.env.GEMINI_API_KEY);
async function generateEmbedding(text) {
  return Array.from(text.slice(0, 100))
    .map(char => char.charCodeAt(0));
}

module.exports = { generateEmbedding };

