---
title: "What Is a Large Language Model (LLM)"
description: "A precise technical definition of large language models, including architecture fundamentals, training methodology, and the distinction between base models and instruction-tuned variants."
category: llm
pubDate: 2024-06-03
toc:
  - { text: "Definition", slug: "definition" }
  - { text: "Architecture", slug: "architecture" }
  - { text: "Training", slug: "training" }
  - { text: "Model Variants", slug: "model-variants" }
---

## Definition

A **large language model (LLM)** is a neural network trained on a corpus of text data to model the conditional probability distribution of tokens. Given a sequence of input tokens, an LLM outputs a probability distribution over its vocabulary for the next token. Autoregressive sampling from this distribution produces coherent text.

The term "large" is relative and historically contingent, but conventionally refers to models with parameter counts in the range of 1 billion to 1 trillion+.

## Architecture

Contemporary LLMs are built on the **Transformer** architecture (Vaswani et al., 2017). Core components:

- **Token embedding layer** — maps discrete tokens to dense vector representations
- **Positional encoding** — injects sequence-order information into embeddings
- **Multi-head self-attention** — computes pairwise relevance between all tokens in the context window
- **Feed-forward sublayers** — apply nonlinear transformations per token position
- **Layer normalization** — stabilizes gradient flow across deep stacks

Decoder-only transformers (GPT family, Llama, Claude) are the dominant architecture for generative tasks.

## Training

LLM training proceeds in two principal phases:

### Pretraining
The model is trained on a large text corpus using **next-token prediction** (causal language modeling). The objective is to minimize cross-entropy loss between predicted and actual next tokens. Pretraining corpora commonly include web crawls, books, code repositories, and academic papers, totaling trillions of tokens.

### Instruction Tuning / RLHF
Base pretrained models are further trained on curated instruction-following datasets and refined using **Reinforcement Learning from Human Feedback (RLHF)** or **Direct Preference Optimization (DPO)** to produce helpful, harmless, and honest assistant behavior.

## Model Variants

| Variant | Training Method | Primary Use |
|---|---|---|
| Base model | Pretraining only | Text completion, research |
| Instruction-tuned | + Supervised fine-tuning | Chat, task completion |
| RLHF-tuned | + Preference learning | Safety-aligned assistants |
| Domain-specific | Fine-tuned on vertical data | Legal, medical, code |
