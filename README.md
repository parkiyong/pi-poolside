# pi-poolside

Poolside AI provider extension for [Pi](https://github.com/earendil-works/pi-coding-agent).

Registers [Poolside](https://poolside.ai) as an OpenAI-compatible provider so you can pick its models from Pi's `/model` selector.

## Install

```bash
npm install -g pi-poolside
```

Pi auto-loads installed packages that declare a `pi.extensions` entry, so no extra wiring is needed.

## Auth

Export your Poolside API key before launching Pi:

```bash
export POOLSIDE_API_KEY=...
```

## Usage

Inside Pi, run:

```text
/model
```

and pick one of:

| Model ID | Name | Params | Context | Reasoning | Pricing (per 1M tokens) |
|---|---|---|---|---|---|
| `poolside/laguna-s-2.1` | Laguna S 2.1 | 118B total / 8B active | **1,048,576** | ✅ native (on/off per request) | $0.10 in / $0.20 out |
| `poolside/laguna-xs-2.1` | Laguna XS 2.1 | 33B total / 3B active | 262,144 | ✅ native | $0.06 in / $0.12 out |
| `poolside/laguna-m.1` | Laguna M.1 | 225B total / 23B active | 262,144 | ✅ native | $0.20 in / $0.40 out |
| `poolside/laguna-xs.2` | Laguna XS.2 | 33B total / 3B active | 262,144 | ✅ default thinking | free (limited preview) |

All Laguna models are Mixture-of-Experts (MoE) and text-to-text only (no vision).

## Configuration notes

The extension targets:

- Base URL: `https://inference.poolside.ai/v1`
- API style: `openai-completions`
- Auth: bearer header via `POOLSIDE_API_KEY`
- `max_tokens` field name forced via `compat.maxTokensField`

`contextWindow`, `maxTokens` and `cost` are sourced from [docs.poolside.ai](https://docs.poolside.ai/get-started/supported-models) and [OpenRouter's Poolside listing](https://openrouter.ai/poolside). Verify against your account if needed.

## Adding or updating models

Edit the `models` array in [`index.ts`](./index.ts). Each entry follows Pi's provider model schema (`id`, `name`, `reasoning`, `input`, `cost`, `contextWindow`, `maxTokens`, `compat`).

## License

[MIT](./LICENSE)