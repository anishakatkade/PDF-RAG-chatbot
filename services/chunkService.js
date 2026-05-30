const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");

async function createChunks(text) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  return await splitter.splitText(text);
}

module.exports = {
  createChunks,
};