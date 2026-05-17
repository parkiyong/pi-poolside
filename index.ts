/**
 * Poolside Provider Extension
 *
 * Registers Poolside (https://poolside.ai) as an OpenAI-compatible provider.
 *
 * Auth:
 *   export POOLSIDE_API_KEY=...
 *
 * Then `/model` and pick poolside/laguna-m.1 or poolside/laguna-xs.2.
 *
 * NOTE: contextWindow, maxTokens and cost are conservative placeholders.
 * Update them with the values Poolside publishes for your account.
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
			{
				id: "poolside/laguna-m.1",
				name: "Laguna M.1",
				reasoning: true,
				input: ["text"],
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 131100,
				maxTokens: 8192,
				compat: {
					maxTokensField: "max_tokens",
				},
			},
			{
				id: "poolside/laguna-xs.2",
				name: "Laguna XS.2",
				reasoning: true,
				input: ["text"],
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
				contextWindow: 131100,
				maxTokens: 8192,
				compat: {
					maxTokensField: "max_tokens",
				},
			},
		],
	});
}
