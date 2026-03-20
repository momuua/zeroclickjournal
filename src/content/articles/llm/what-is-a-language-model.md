---
title: "What Is a Large Language Model (LLM)"
description: "A precise technical definition of large language models — covering transformer architecture, pretraining methodology, instruction tuning, and the distinction between base models and assistant-tuned variants."
category: llm
pubDate: 2024-06-03
toc:
  - { text: "Definition", slug: "definition" }
  - { text: "Architecture", slug: "architecture" }
  - { text: "Training Phases", slug: "training-phases" }
  - { text: "Model Variants", slug: "model-variants" }
  - { text: "Key Metrics", slug: "key-metrics" }
---

## Definition

A **large language model (LLM)** is a neural network trained on a corpus of text data to model the conditional probability distribution of tokens. Given a sequence of input tokens, an LLM outputs a probability distribution over its vocabulary for the next token. Autoregressive sampling from this distribution produces coherent text.

The term "large" is relative and historically contingent, but conventionally refers to models with parameter counts above 1 billion. As of 2024, frontier models range from 70B to estimated 1T+ parameters.

## Architecture

Contemporary LLMs are built on the **Transformer** architecture (Vaswani et al., 2017). Core components:

- **Token embedding layer** — maps discrete tokens to dense vector representations in high-dimensional space
- **Positional encoding** — injects sequence-order information (absolute or rotary/RoPE)
- **Multi-head self-attention** — computes pairwise relevance between all tokens in the context window in parallel
- **Feed-forward sublayers** — apply nonlinear transformations per token position (often SwiGLU activation)
- **Layer normalization** — stabilizes gradient flow (pre-norm is now standard over post-norm)
- **Final linear + softmax** — projects hidden states to vocabulary probability distributions

Decoder-only transformers (GPT family, Llama, Claude, Gemini) are the dominant architecture for generative tasks. Encoder-decoder models (T5, BART) are used for translation and summarization.

## Training Phases

### Pretraining
The model is trained on a large text corpus using **next-token prediction** (causal language modeling). The objective minimizes cross-entropy loss between predicted and actual next tokens across the training sequence. Pretraining corpora typically include web crawls, books, code repositories, and academic papers, totaling 1–15 trillion tokens for frontier models.

### Supervised Fine-Tuning (SFT)
Base pretrained models are fine-tuned on curated instruction-following datasets — human-written (prompt, response) pairs that demonstrate the desired assistant behavior. This phase aligns the model's output distribution with the format of helpful responses.

### RLHF / DPO Alignment
Reinforcement Learning from Human Feedback (RLHF) or Direct Preference Optimization (DPO) further refines the model using human preference judgments between response pairs. This phase optimizes for helpfulness, harmlessness, and honesty (HHH) beyond what SFT alone achieves.

## Model Variants

| Variant | Training Method | Primary Use Case |
|---|---|---|
| Base model | Pretraining only | Text completion, research |
| Instruction-tuned | Pretraining + SFT | Chat, task completion |
| RLHF-aligned | + Preference learning | Safety-aligned assistants |
| Domain-specific | Fine-tuned on vertical data | Legal, medical, code |
| Quantized (GGUF/AWQ) | Post-training compression | Local / edge deployment |
| Multimodal | + Vision/audio encoders | Image+text understanding |

## Key Metrics

**Perplexity** — measures how well the model predicts a held-out test corpus. Lower is better. Useful for comparing base models; less meaningful for instruction-tuned models.

**MMLU** — Massive Multitask Language Understanding. 57-subject multiple-choice benchmark testing world knowledge and reasoning. Scores above 85% indicate strong general capability.

**HumanEval** — measures code generation correctness on Python programming problems. Pass@1 rates above 80% indicate strong coding ability.

**Context window** — maximum sequence length the model can process in a single forward pass. Ranges from 4K tokens (early GPT-3) to 1M+ tokens (Gemini 1.5 Pro).
