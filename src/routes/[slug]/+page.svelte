<script>
	export let data;
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Example Title"
	description="Example Description."
	openGraph={{
		url: 'https://www.url.ie/a',
		title: 'Open Graph Title',
		description: 'Open Graph Description',
		images: [
			{
				url: 'https://er-s3-prod.s3.fr-par.scw.cloud/pizzo_petr_sevcovic_fy_Qr1_T3_GE_34_unsplash_08bae03d46_27a0655902_a17d57bab8.jpg',
				alt: 'Og Image Alt'
			}
		],
		siteName: 'SiteName'
	}}
/>

<!-- <svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<title>{data.slug} Page</title>
	<meta name="description" content={`${data.slug} Description`} />
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href={`${data.slug}/apple-touch-icon.png`} sizes="180x180" />
	<link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="manifest" href={`/manifest/${data.slug}`} />
</svelte:head> -->

<h1>{data.slug}</h1>
