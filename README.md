# RAG PDF Chatbot

## Overview

RAG PDF Chatbot is a Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents and ask questions based on the uploaded content.

The application extracts text from PDFs, splits it into chunks, retrieves relevant context, and generates answers using Google's Gemini AI model.

---

## Features

* PDF Upload Support
* PDF Text Extraction
* Intelligent Text Chunking
* Context-Based Retrieval
* Gemini AI Integration
* Question Answering from Uploaded PDFs
* REST API Architecture
* Fast Response Generation

---

## Tech Stack

### Backend

* Node.js
* Express.js

### AI

* Google Gemini API

### Document Processing

* pdf-parse
* LangChain Text Splitters

### Other Tools

* Multer
* Dotenv
* CORS

---

## System Architecture

PDF Upload
→ Text Extraction
→ Chunk Creation
→ Context Retrieval
→ Gemini AI
→ Answer Generation

---

## API Endpoints

### Upload PDF

POST `/api/upload`

Uploads and processes a PDF document.

### Ask Question

POST `/api/ask`

Request:

```json
{
  "question": "What is LEFT JOIN?"
}
```

Response:

```json
{
  "success": true,
  "answer": "LEFT JOIN returns all records from the left table..."
}
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd rag-pdf-chat/backend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

### Run Project

```bash
npm run dev
```

---

## Future Enhancements

* ChromaDB Integration
* Semantic Vector Search
* Real Embeddings
* Multi-PDF Support
* User Authentication
* Chat History Management
* React Frontend
* Cloud Deployment

