const chunksStore = [];

function addChunk(chunk) {
  chunksStore.push(chunk);
}

function getChunks() {
  return chunksStore;
}

function getChunksCount() {
  return chunksStore.length;
}

module.exports = {
  addChunk,
  getChunks,
  getChunksCount,
};