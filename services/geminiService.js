const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function askGemini(question, context) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
Context:
${context}

Question:
${question}

Answer:
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = { askGemini };