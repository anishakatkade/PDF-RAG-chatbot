const express = require("express");
const { getChunks } = require("../services/chromaService");
const { askGemini } = require("../services/geminiService");

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    const chunks = getChunks();

    console.log("Retrieved Chunks:", chunks.length);

    if (chunks.length === 0) {
      return res.status(400).json({
        success: false,
        error: "No PDF uploaded yet",
      });
    }

    let bestChunk = chunks[0];

    const keywords = question.toLowerCase().split(" ");

    for (const chunk of chunks) {
      const chunkText = chunk.text.toLowerCase();

      let matched = false;

      for (const word of keywords) {
        if (chunkText.includes(word)) {
          matched = true;
          break;
        }
      }

      if (matched) {
        bestChunk = chunk;
        break;
      }
    }

    const answer = await askGemini(
      question,
      bestChunk.text.substring(0, 1000)
    );

    res.json({
      success: true,
      question,
      answer,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
