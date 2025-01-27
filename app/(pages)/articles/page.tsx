"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState, useEffect } from "react";

type Article = {
	id: number;
	title: string;
	description: string;
	url: string;
	source: {
		name: string;
	};
	category: string;
	publishedAt: string;
};

const categories = [
	"All",
	"waste disposal",
	"recycling",
	"climate change",
	"environment",
	"wild fires",
];

const sources = ["All", "BBC", "CNN", "The Guardian", "National Geographic"];
const sortOptions = ["Newest", "Oldest"];

const ArticlesPage = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("All");
	const [selectedSource, setSelectedSource] = useState<string>("All");
	const [sortBy, setSortBy] = useState<string>("Newest");
	const [loading, setLoading] = useState<boolean>(true);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const articlesPerPage = 18;

	useEffect(() => {
		fetch("/api/articles")
			.then((response) => response.json())
			.then((data: Article[]) => {
				setArticles(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching articles:", error);
				setLoading(false);
			});
	}, []);

	const filteredArticles = articles.filter((article) => {
		const matchesCategory =
			selectedCategory === "All" || article.category === selectedCategory;
		const matchesSource =
			selectedSource === "All" || article.source.name === selectedSource;
		return matchesCategory && matchesSource;
	});

	const sortedArticles = filteredArticles.sort((a, b) => {
		if (sortBy === "Newest") {
			return (
				new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
			);
		} else {
			return (
				new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
			);
		}
	});

	const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
	const maxPagesToShow = 5;

	const getPageNumbers = () => {
		const pages = [];
		let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
		let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

		if (endPage - startPage + 1 < maxPagesToShow) {
			startPage = Math.max(1, endPage - maxPagesToShow + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		return pages;
	};

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const renderPagination = () => {
		const pageNumbers = getPageNumbers();

		return (
			<div className="flex flex-wrap justify-center mt-6 pb-8 gap-2">
				<button
					onClick={() => paginate(Math.max(1, currentPage - 1))}
					disabled={currentPage === 1}
					className={`px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-all ${
						currentPage === 1
							? "bg-neutral-300 text-neutral-600 exo cursor-not-allowed"
							: "bg-white text-neutral-800 exo hover:bg-neutral-50 hover:shadow-md"
					}`}
				>
					Previous
				</button>

				{pageNumbers.map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => paginate(pageNumber)}
						className={`px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-all ${
							currentPage === pageNumber
								? "bg-neutral-600 exo text-white"
								: "bg-white text-neutral-800 exo hover:bg-neutral-50 hover:shadow-md"
						}`}
					>
						{pageNumber}
					</button>
				))}

				<button
					onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
					disabled={currentPage === totalPages}
					className={`px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-all ${
						currentPage === totalPages
							? "bg-neutral-300 exo text-neutral-600 cursor-not-allowed"
							: "bg-white text-neutral-800 exo hover:bg-neutral-50 hover:shadow-md"
					}`}
				>
					Next
				</button>
			</div>
		);
	};

	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	const currentArticles = sortedArticles.slice(
		indexOfFirstArticle,
		indexOfLastArticle
	);

	return (
		<div className="flex w-full h-screen">
			<Sidebar />
			<div className="ml-[25vw] w-[75vw] p-[1.5rem] xl:p-[3rem] xl:pt-[2rem]">
				<h1 className="dirtyline36 text-[2rem] xl:text-[4rem] 2xl:text-[5rem] mx-auto text-center text-black">
					UseFUl ArtICleS
				</h1>

				<div className="flex flex-col gap-[1rem] mb-[2rem] mt-[0.5rem]">
					<div className="flex flex-wrap gap-4 justify-center">
						<div className="flex border-red-400/0 w-1/4 rounded-full p-[5px] shadow-md bg-gradient-to-r from-red-200 via-sky-300 via-40% to-yellow-200">
							<select
								value={selectedCategory}
								onChange={(e) => setSelectedCategory(e.target.value)}
								className="w-full exo rounded-full py-[0.5rem] px-[2rem] outline-none focus:outline-none focus:ring-0 focus:border-transparent text-neutral-800 m-0 text-[1.2rem]"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>

						<div className="flex border-red-400/0 w-1/4 rounded-full p-[5px] shadow-md bg-gradient-to-r from-red-200 via-sky-300 via-40% to-yellow-200">
							<select
								value={selectedSource}
								onChange={(e) => setSelectedSource(e.target.value)}
								className="w-full exo rounded-full py-[0.5rem] px-[2rem] outline-none focus:outline-none focus:ring-0 focus:border-transparent text-neutral-800 m-0 text-[1.2rem]"
							>
								{sources.map((source) => (
									<option key={source} value={source}>
										{source}
									</option>
								))}
							</select>
						</div>

						<div className="flex border-red-400/0 w-1/4 rounded-full p-[5px] shadow-md bg-gradient-to-r from-red-200 via-sky-300 via-40% to-yellow-200">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="w-full exo rounded-full py-[0.5rem] px-[2rem] outline-none focus:outline-none focus:ring-0 focus:border-transparent text-neutral-800 m-0 text-[1.2rem]"
							>
								{sortOptions.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-[1rem]">
					{loading ? (
						<div className="col-span-2 text-center text-lg text-neutral-600">
							Loading articles...
						</div>
					) : currentArticles.length === 0 ? (
						<div className="col-span-2 text-center text-lg text-neutral-600">
							No articles found.
						</div>
					) : (
						currentArticles.map((article, index) => (
							<div
								key={index}
								className="w-full bg-white border-2 border-neutral-200 rounded-[0.5rem] shadow-sm p-[1rem] hover:shadow-md transition-all"
							>
								<a
									href={article.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-lg font-bold exo text-neutral-800 hover:text-neutral-600"
								>
									{article.title}
								</a>
								<p className="text-sm text-neutral-600 mt-2">
									{article.description
										? article.description.slice(0, 100)
										: article.description}
									...
								</p>
								<p className="text-sm text-neutral-500 mt-2">
									<strong>Source:</strong> {article.source?.name}
								</p>
								<p className="text-sm text-neutral-500 mt-1">
									<strong>Category:</strong> {article.category}
								</p>
								<p className="text-sm text-neutral-500 mt-1">
									<strong>Published:</strong>{" "}
									{new Date(article.publishedAt).toLocaleDateString()}
								</p>
							</div>
						))
					)}
				</div>

				{renderPagination()}
			</div>
		</div>
	);
};

export default ArticlesPage;
