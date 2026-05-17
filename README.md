# pi-poolside

Poolside AI provider extension for [Pi](https://github.com/earendil-works/pi-coding-agent).

Registers [Poolside](https://poolside.ai) as an OpenAI-compatible provider so you can pick its models from Pi's `/model` selector.

## Install

```bash
npm install -g @parkiyong/pi-poolside
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

- `poolside/laguna-m.1` — Laguna M.1
- `poolside/laguna-xs.2` — Laguna XS.2

Both are registered with `reasoning: true` and a 131K context window placeholder.

## Configuration notes

The extension targets:

- Base URL: `https://inference.poolside.ai/v1`
- API style: `openai-completions`
- Auth: bearer header via `POOLSIDE_API_KEY`
- `max_tokens` field name forced via `compat.maxTokensField`

`contextWindow`, `maxTokens` and `cost` are **conservative placeholders**. Update them in `index.ts` to match the limits and pricing Poolside publishes for your account.

## Adding or updating models

Edit the `models` array in [`index.ts`](./index.ts). Each entry follows Pi's provider model schema (`id`, `name`, `reasoning`, `input`, `cost`, `contextWindow`, `maxTokens`, `compat`).

## License

[MIT](./LICENSE)
