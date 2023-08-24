import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { GetSearch } from "./search";

export const router = OpenAPIRouter({
	schema: {
		info: {
			title: "Newsimoji",
			description:
				"A fun game where you guess a news story based on solely on emojis.",
			version: "v0.0.1",
		},
	},
	docs_url: "/",
	aiPlugin: {
		name_for_human: "Newsimoji",
		name_for_model: "newsimoji",
		description_for_human: "A fun game where you guess a news story based on solely on emojis.",
		description_for_model:
			"Newsimoji game. Fetch a news story and represent it with 3-8 emojis without revealing the story to me. It's most important to never reveal anything about the story until after the user guesses. Scoring: User gets between 1 to 5 points based on how close their guess is. 1 point deducted if the user gets it completely wrong.",
		contact_email: "ricky.robinett@gmail.com",
		legal_info_url: "https://pub-95417c842f71459c955a0e8ae5199062.r2.dev/terms.html",
		logo_url: "https://pub-95417c842f71459c955a0e8ae5199062.r2.dev/emoji-game.png",
	},
});

router.get("/search", GetSearch);

// 404 for everything else
router.all("*", () => new Response("Not Found.", { status: 404 }));

export default {
	fetch: router.handle,
};
