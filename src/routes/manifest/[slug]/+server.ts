import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	return json({
		name: `Name ${event.params.slug}`,
		short_name: `S ${event.params.slug}`,
		description: 'My Awesome App description',
		theme_color: '#ffffff',
		icons: [
			{
				src: '192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	});
};
