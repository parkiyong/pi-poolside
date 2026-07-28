/**
 * Poolside Provider Extension
 *
 * Registers Poolside (https://poolside.ai) as an OpenAI-compatible provider
 * with all currently available models accessible through the Poolside Platform API.
 *
 * Models covered:
 *   - Laguna S 2.1   — flagship 118B MoE, 1M context, native reasoning
 *   - Laguna XS 2.1  — updated 33B MoE, 256K context, native reasoning
 *   - Laguna M.1     — large 225B MoE, 256K context, native reasoning
 *   - Laguna XS.2    — original 33B MoE, 256K context
 *
 * Auth:
 *   export POOLSIDE_API_KEY=...
 *
 * Then `/model` and pick a poolside/... model.
 *
 * Pricing (per 1M tokens, via Platform API):
 *   Laguna S 2.1  → $0.10 / $0.20  (input / output)
 *   Laguna XS 2.1 → $0.06 / $0.12
 *   Laguna M.1    → $0.20 / $0.40
 *   Laguna XS.2   → free during limited-time preview
 *
 * Sources: docs.poolside.ai, openrouter.ai/poolside
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerProvider("poolside", {
		name: "Poolside",
		baseUrl: "https://inference.poolside.ai/v1",
		apiKey: "POOLSIDE_API_KEY",
		api: "openai-completions",
		authHeader: true,
		models: [
			// ── Laguna S 2.1 ─────────────────────────────────────────────────
			{
				id: "poolside/laguna-s-2.1",
				name: "Laguna S 2.1",
				reasoning: true,
				input: ["text"],
				cost: { input: 0.10, output: 0.20, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 1_048_576,
				maxTokens: 131_072,
				compat: {
					maxTokensField: "max_tokens",
				},
			},
			// ── Laguna XS 2.1 ────────────────────────────────────────────────
			{
				id: "poolside/laguna-xs-2.1",
				name: "Laguna XS 2.1",
				reasoning: true,
				input: ["text"],
				cost: { input: 0.06, output: 0.12, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 262_144,
				maxTokens: 32_768,
				compat: {
					maxTokensField: "max_tokens",
				},
			},
			// ── Laguna M.1 ───────────────────────────────────────────────────
			{
				id: "poolside/laguna-m.1",
				name: "Laguna M.1",
				reasoning: true,
				input: ["text"],
				cost: { input: 0.20, output: 0.40, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 262_144,
				maxTokens: 32_768,
				compat: {
					maxTokensField: "max_tokens",
				},
			},
			// ── Laguna XS.2 ──────────────────────────────────────────────────
			{
				id: "poolside/laguna-xs.2",
				name: "Laguna XS.2",
				reasoning: true,
				input: ["text"],
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 262_144,
				maxTokens: 32_768,
				compat: {
					maxTokensField: "max_tokens",
				},
			},
		],
	});
}