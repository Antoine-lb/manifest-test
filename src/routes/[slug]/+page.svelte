<script>
	export let data;
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<title>{data.slug} Page</title>
	<meta name="description" content={`${data.slug} Description`} />
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
	<link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<h1>{data.slug}</h1>
