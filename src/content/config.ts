import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.string(),
		// date: z.coerce.date(),
		// date: z.string().datetime({ offset: true }),
		description: z.string(),
	}),
});

export const collections = {
	news: newsCollection,
};
