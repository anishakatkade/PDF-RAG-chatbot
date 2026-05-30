# PDF RAG Chatbot

An AI-powered Retrieval-Augmented Generation (RAG) chatbot that enables users to upload PDF documents and ask natural language questions. The system retrieves relevant information from uploaded documents and generates context-aware answers using Google's Gemini Large Language Model.

## 🚀 Key Features

* PDF Upload and Processing
* Automatic Text Extraction from PDF Documents
* Intelligent Text Chunking using LangChain
* Context-Based Information Retrieval
* AI-Powered Question Answering with Gemini
* Real-Time Query Processing
* RESTful API Architecture
* Scalable Backend Design

## 🏗️ System Workflow

1. Upload a PDF document.
2. Extract text content from the PDF.
3. Split the document into manageable chunks.
4. Store chunks for retrieval.
5. Accept user questions.
6. Retrieve the most relevant context from the document.
7. Generate accurate answers using Gemini AI.
8. Return context-aware responses to the user.

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### AI & NLP

* Google Gemini API
* LangChain Text Splitters

### Document Processing

* PDF-Parse
* Multer

### Storage

* In-Memory Context Store (Current Version)

## 📌 API Endpoints

### Upload PDF

POST `/api/upload`

Upload PDF documents for processing and retrieval.

### Ask Questions

POST `/api/ask`

Ask questions related to uploaded PDF content and receive AI-generated answers.

## 🎯 Project Highlights

* Built a complete Retrieval-Augmented Generation (RAG) pipeline from scratch.
* Integrated Google Gemini for context-aware answer generation.
* Implemented document chunking and retrieval mechanisms.
* Designed scalable APIs for document ingestion and querying.
* Demonstrates practical applications of LLMs, NLP, and document intelligence systems.

## 🔮 Future Enhancements

* ChromaDB Vector Database Integration
* Semantic Vector Search
* Real Embeddings using Gemini Embedding Models
* React Frontend Interface
* Multi-PDF Support
* User Authentication
* Chat History Management
* Cloud Deployment

## 📷 Sample Flow

PDF Upload → Text Extraction → Chunking → Context Retrieval → Gemini AI → Answer Generation

## 👩‍💻 Author

Anisha Katkade
Full Stack Developer | MERN Stack | AI & RAG Enthusiast
