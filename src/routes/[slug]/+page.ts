import type { PageLoad } from './$types';

export const load = (async (event) => {
	return {
		slug: event.params.slug
	};
}) satisfies PageLoad;
