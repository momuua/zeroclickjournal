---
title: "Retrieval-Augmented Generation (RAG) Explained"
description: "A technical explanation of Retrieval-Augmented Generation — how it works, why it reduces hallucination, its architecture components, and when to use RAG versus fine-tuning."
category: llm
pubDate: 2024-06-08
isFAQ: true
faqItems:
  - question: "What is Retrieval-Augmented Generation (RAG)?"
    answer: "RAG is an architecture that enhances LLM outputs by retrieving relevant documents from an external knowledge base at inference time and including them in the model's context window before generating a response."
  - question: "Does RAG eliminate hallucinations?"
    answer: "RAG significantly reduces hallucinations on knowledge-intensive tasks by grounding responses in retrieved documents. However, it does not eliminate hallucinations entirely — the model can still misinterpret retrieved content or hallucinate details not present in the retrieved passages."
  - question: "When should you use RAG instead of fine-tuning?"
    answer: "Use RAG when your knowledge base changes frequently, when you need citations, or when your domain knowledge is too large to fit in training data. Use fine-tuning when you need to change the model's behavior, style, or reasoning patterns rather than its factual knowledge."
toc:
  - { text: "What Is RAG", slug: "what-is-rag" }
  - { text: "Architecture", slug: "architecture" }
  - { text: "Retrieval Methods", slug: "retrieval-methods" }
  - { text: "RAG vs Fine-Tuning", slug: "rag-vs-fine-tuning" }
---

## What Is RAG

**Retrieval-Augmented Generation (RAG)** is an LLM architecture pattern that separates parametric knowledge (stored in model weights) from non-parametric knowledge (stored in an external document corpus). At inference time, relevant documents are retrieved and injected into the model's context window before generation.

RAG was introduced by Lewis et al. (2020) at Meta AI as a method to improve factual accuracy on open-domain question answering tasks without retraining the base model.

## Architecture

A standard RAG pipeline has three components:

**1. Document Store**
A collection of documents (PDFs, web pages, database records) chunked into passages of typically 256–512 tokens and stored with associated embeddings in a vector database (Pinecone, Weaviate, pgvector, FAISS).

**2. Retriever**
Given a user query, the retriever computes the query's embedding and performs approximate nearest-neighbor (ANN) search against the document store to return the top-k most semantically similar passages. Dense retrieval (bi-encoder models like `text-embedding-3-large`) outperforms sparse retrieval (BM25) on most semantic tasks but can be combined in hybrid search.

**3. Generator**
The retrieved passages are concatenated with the user query and a system prompt into the LLM's context window. The model generates a response grounded in the retrieved content and can be prompted to cite specific passages.

## Retrieval Methods

| Method | Mechanism | Best For |
|---|---|---|
| Dense (bi-encoder) | Embedding similarity | Semantic questions |
| Sparse (BM25) | Term frequency matching | Keyword-heavy queries |
| Hybrid | Dense + sparse fusion | General purpose |
| Re-ranking | Cross-encoder scoring of top-k | High-precision tasks |
| HyDE | Generate hypothetical doc, then retrieve | Ambiguous queries |

## RAG vs Fine-Tuning

**Use RAG when:**
- Knowledge base updates frequently (daily/weekly)
- Responses must be traceable to specific source documents
- Domain corpus is large (millions of documents)
- You need to deploy quickly without retraining

**Use fine-tuning when:**
- You need to change the model's reasoning style or output format
- Domain-specific vocabulary or notation is critical
- Latency requirements prohibit retrieval at inference time
- The knowledge corpus is small and stable

**Use both when:**
A fine-tuned model specialized in your domain's reasoning patterns, combined with RAG for current factual grounding, outperforms either approach alone on most enterprise knowledge tasks.
