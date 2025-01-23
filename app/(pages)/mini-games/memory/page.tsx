"use client";
import React, { useState, useEffect } from "react";

type Card = {
	id: number;
	content: string;
	matched: boolean;
};

const natureCards = [
	"Tree 🌳",
	"River 🌊",
	"Mountain 🏔️",
	"Sun 🌞",
	"Cloud ☁️",
	"Flower 🌸",
	"Rain 🌧️",
	"Forest 🌲",
];

const MemoryGame = () => {
	const [cards, setCards] = useState<Card[]>([]);
	const [flippedCards, setFlippedCards] = useState<number[]>([]);
	const [timer, setTimer] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);

	useEffect(() => {
		initializeGame();
	}, []);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;
		if (gameStarted) {
			interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [gameStarted]);

	const initializeGame = () => {
		const shuffledCards = [...natureCards, ...natureCards]
			.sort(() => Math.random() - 0.5)
			.map((content, index) => ({ id: index, content, matched: false }));
		setCards(shuffledCards);
		setFlippedCards([]);
		setTimer(0);
		setGameStarted(false);
	};

	const handleCardClick = (id: number) => {
		if (!gameStarted) setGameStarted(true);

		if (flippedCards.length === 2) return;

		const newFlippedCards = [...flippedCards, id];
		setFlippedCards(newFlippedCards);

		if (newFlippedCards.length === 2) {
			const [first, second] = newFlippedCards;
			if (cards[first].content === cards[second].content) {
				setCards((prev) =>
					prev.map((card) =>
						card.id === first || card.id === second
							? { ...card, matched: true }
							: card
					)
				);
			}
			setTimeout(() => setFlippedCards([]), 1000);
		}
	};

	const allMatched = cards.every((card) => card.matched);

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-100/75 via-sky-100/75 via-40% to-yellow-100/75">
			<h1 className="text-4xl font-bold text-neutral-700 mb-6">
				Memory Cards Game
			</h1>
			<div className="text-lg font-medium text-neutral-600 mb-4">
				Time: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
			</div>
			<div className="grid grid-cols-4 gap-2">
				{cards.map((card) => (
					<div
						key={card.id}
						className={` flex items-center justify-center border-2 rounded-md text-lg font-semibold cursor-pointer text-neutral-800 exo w-[7rem] xl:w-[8rem] 2xl:w-[9rem] h-[7rem] xl:h-[8rem] 2xl:h-[9rem] shadow-sm ${
							flippedCards.includes(card.id) || card.matched
								? "bg-neutral-500/10 border-neutral-300"
								: "bg-white"
						}`}
						onClick={() => handleCardClick(card.id)}
					>
						{flippedCards.includes(card.id) || card.matched
							? card.content
							: "❓"}
					</div>
				))}
			</div>
			{allMatched && (
				<div className="mt-6 text-xl font-bold text-neutral-700">
					🎉 Congratulations! You matched all the cards in{" "}
					{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}{" "}
					minutes! 🎉
				</div>
			)}
			<button
				onClick={initializeGame}
				className="mt-4 px-6 py-2 bg-neutral-600 text-white font-medium rounded-md shadow-md hover:bg-neutral-700"
			>
				Restart Game
			</button>
		</div>
	);
};

export default MemoryGame;
