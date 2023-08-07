import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { GetSearch } from "./search";

export const router = OpenAPIRouter({
	schema: {
		info: {
			title: "Emoji Guesser",
			description:
				"A plugin that lets users play an emoji guessing game with AI",
			version: "v0.0.1",
		},
	},
	docs_url: "/",
	aiPlugin: {
		name_for_human: "Emoji Guesser",
		name_for_model: "emoji_guesser",
		description_for_human: "Emoji Guesser",
		description_for_model:
			"Emoji Guesser plugin for ChatGPT. It pulls current stories from a news website and then uses those to create emojis about the story.",
		contact_email: "support@example.com",
		legal_info_url: "http://www.example.com/legal",
		logo_url: "https://workers.cloudflare.com/resources/logo/logo.svg",
	},
});

router.get("/search", GetSearch);

// 404 for everything else
router.all("*", () => new Response("Not Found.", { status: 404 }));

export default {
	fetch: router.handle,
};
