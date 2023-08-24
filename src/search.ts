import {
	ApiException,
	OpenAPIRoute,
	Query,
	ValidationError,
} from "@cloudflare/itty-router-openapi";

import cheerio from "cheerio";


export class GetSearch extends OpenAPIRoute {
	static schema = {
		tags: ["Search"],
		summary: "Get current events for a website",
		parameters: {
			q: Query(String, {
				description: "website url to crawl",
				default: "www.nytimes.com",
			}),
		},
		responses: {
			"200": {
				schema: {
					repos: [
						{
							name: "itty-router-openapi",
							description:
								"OpenAPI 3 schema generator and validator for Cloudflare Workers",
							stars: "80",
							url: "https://github.com/cloudflare/itty-router-openapi",
						},
					],
				},
			},
		},
	};

	async handle(request: Request, env, ctx, data: Record<string, any>) {
		const response = await fetch(data.q);
		const text = await response.text();
		const $ = cheerio.load(text);
		const p = $("p");

		console.log(p);

		//const url = `https://api.github.com/search/repositories?q=${data.q}`;
		return new Response(p.toString());
	}
}
