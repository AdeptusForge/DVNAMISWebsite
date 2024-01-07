import { z, defineCollection } from 'astro:content';
const projCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		image: z.string(),
		image_alt: z.string(),
		timeOfCreation: z.string(),
		undertitle: z.string().optional(),
		extraText: z.array(z.string()).optional(),
		bg: z.string().optional(),
		grad: z.string().optional()
	}),
});
export const collections = {
	'PortfolioEntries': projCollection
};
