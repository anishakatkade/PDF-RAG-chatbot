const express = require("express");
const { extractText } = require("../services/pdfService.js");
const { createChunks } = require("../services/chunkService.js");
const { generateEmbedding } = require("../services/embeddingService.js");
const { addChunk, getChunksCount } = require("../services/chromaService");

const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/upload", (req, res) => {
  res.send("Upload Route Working");
});

router.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    // PDF Text Extract
    const text = await extractText(req.file.path);

    // Create Chunks
    const chunks = await createChunks(text);

    // Store all chunks in memory
    for (let i = 0; i < chunks.length; i++) {
      const embedding = await generateEmbedding(chunks[i]);

      addChunk({
        id: `chunk-${i}`,
        text: chunks[i],
        embedding,
      });
    }
    //console.log("Stored Chunks:", chunksStore?.length);
    console.log("Stored Chunks:", getChunksCount());
    res.json({
      success: true,
      message: "PDF Stored Successfully",
      totalChunks: chunks.length,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
