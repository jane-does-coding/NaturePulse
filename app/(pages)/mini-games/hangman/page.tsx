"use client";
import React, { useState, useEffect } from "react";

const natureWords = [
	"FOREST",
	"OCEAN",
	"MOUNTAIN",
	"RAINBOW",
	"WILDLIFE",
	"CLIMATE",
	"ECOSYSTEM",
	"BIODIVERSITY",
	"SUSTAINABILITY",
	"RENEWABLE",
];

const HangmanGame = () => {
	const [word, setWord] = useState("");
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const [incorrectGuesses, setIncorrectGuesses] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [gameWon, setGameWon] = useState(false);

	useEffect(() => {
		initializeGame();
	}, []);

	const initializeGame = () => {
		const randomWord =
			natureWords[Math.floor(Math.random() * natureWords.length)];
		setWord(randomWord);
		setGuessedLetters([]);
		setIncorrectGuesses(0);
		setGameOver(false);
		setGameWon(false);
	};

	const handleGuess = (letter: string) => {
		if (gameOver || guessedLetters.includes(letter)) return;

		setGuessedLetters((prev) => [...prev, letter]);

		if (!word.includes(letter)) {
			setIncorrectGuesses((prev) => prev + 1);
		}
	};

	useEffect(() => {
		const uniqueLetters = new Set(word.split(""));
		if (
			guessedLetters.filter((letter) => uniqueLetters.has(letter)).length ===
			uniqueLetters.size
		) {
			setGameWon(true);
			setGameOver(true);
		}
	}, [guessedLetters, word]);

	useEffect(() => {
		if (incorrectGuesses >= 6) {
			setGameOver(true);
		}
	}, [incorrectGuesses]);

	const displayWord = word
		.split("")
		.map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
		.join(" ");

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-100/75 via-sky-100/75 via-40% to-yellow-100/75">
			<h1 className="text-4xl font-bold text-neutral-700 mb-6">Hangman Game</h1>
			<div className="text-lg font-medium text-neutral-600 mb-4">
				Guess the Nature Word!
			</div>
			<div className="text-2xl font-semibold text-neutral-800 mb-6">
				{displayWord}
			</div>
			<div className="flex flex-wrap justify-center gap-2 mb-6 w-[40vw]">
				{alphabet.split("").map((letter) => (
					<button
						key={letter}
						onClick={() => handleGuess(letter)}
						disabled={guessedLetters.includes(letter) || gameOver}
						className={`px-4 py-2 text-lg font-semibold rounded-md shadow-sm transition-all ${
							guessedLetters.includes(letter)
								? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
								: "bg-white text-neutral-800 hover:bg-neutral-50 hover:shadow-md"
						}`}
					>
						{letter}
					</button>
				))}
			</div>
			<div className="text-lg font-medium text-neutral-600 mb-4">
				Incorrect Guesses: {incorrectGuesses} / 6
			</div>
			{gameOver && (
				<div className="mt-6 text-xl font-bold text-neutral-700 bg-white/80 px-6 py-3 rounded-lg shadow-lg">
					{gameWon
						? "🎉 Congratulations! You guessed the word!"
						: `😢 Game Over! The word was "${word}".`}
				</div>
			)}
			<button
				onClick={initializeGame}
				className="mt-6 px-6 py-2 bg-neutral-600 text-white font-medium rounded-md shadow-md hover:bg-neutral-700 transition-all"
			>
				Restart Game
			</button>
		</div>
	);
};

export default HangmanGame;
