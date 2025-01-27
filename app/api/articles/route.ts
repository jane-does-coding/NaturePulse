export async function GET() {
	const apiKey = process.env.NEWSAPI_KEY;
	const categories = [
		"waste disposal",
		"recycling",
		"climate change",
		"environment",
		"wild fires",
	];
	const articles = [];

	try {
		for (const category of categories) {
			const response = await fetch(
				`https://newsapi.org/v2/everything?q=${category}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
			);
			const data = await response.json();

			if (data.articles) {
				const categorizedArticles = data.articles.map((article: any) => ({
					...article,
					category,
				}));
				articles.push(...categorizedArticles);
			}
		}

		return Response.json(articles);
	} catch (error) {
		console.error("Error fetching articles from NewsAPI:", error);
		return Response.json(
			{ error: "Failed to fetch articles" },
			{ status: 500 }
		);
	}
}
