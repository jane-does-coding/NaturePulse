"use client";
import React, { useState, useEffect } from "react";

const WORDS = [
	"RECYLE",
	"COMPOST",
	"LANDFIL",
	"PLASTIC",
	"GLASSES",
	"PAPERS",
	"CARBONS",
	"OZONES",
	"CLIMATE",
	"ENERGYS",
	"BIODEG",
	"POLLUTE",
	"SUSTAIN",
	"ECOLOGY",
	"WASTES",
];

const WordleGame = () => {
	const [targetWord, setTargetWord] = useState<string>("");
	const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
	const [currentGuess, setCurrentGuess] = useState<string>("");
	const [currentRow, setCurrentRow] = useState<number>(0);
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		initializeGame();
	}, []);

	const initializeGame = () => {
		const randomWord =
			WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
		setTargetWord(randomWord);
		setGuesses(Array(6).fill(""));
		setCurrentGuess("");
		setCurrentRow(0);
		setGameOver(false);
		setMessage("");
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentGuess(e.target.value.toUpperCase());
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			submitGuess();
		}
	};

	const submitGuess = () => {
		if (currentGuess.length !== 6) {
			setMessage("Guess must be 6 letters long.");
			return;
		}

		const newGuesses = [...guesses];
		newGuesses[currentRow] = currentGuess;
		setGuesses(newGuesses);

		if (currentGuess === targetWord) {
			setMessage("🎉 Congratulations! You guessed the word! 🎉");
			setGameOver(true);
		} else if (currentRow === 5) {
			setMessage(`Game Over! The word was: ${targetWord}`);
			setGameOver(true);
		} else {
			setCurrentRow(currentRow + 1);
			setCurrentGuess("");
			setMessage("");
		}
	};

	const getLetterStatus = (letter: string, index: number, row: number) => {
		if (guesses[row].length <= index) return "empty";
		if (targetWord[index] === letter) return "correct";
		if (targetWord.includes(letter)) return "present";
		return "absent";
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-100/75 via-sky-100/75 via-40% to-yellow-100/75">
			<h1 className="text-4xl font-bold text-neutral-700 mb-6">Eco Wordle</h1>
			<div className="text-lg font-medium text-neutral-600 mb-4">
				Guess the 6-letter environmental term!
			</div>
			<div className="grid grid-rows-6 gap-2">
				{guesses.map((guess, row) => (
					<div key={row} className="flex gap-2">
						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className={`flex items-center justify-center exo border-2 rounded-md text-lg font-semibold w-12 h-12 shadow-sm transition-all duration-200 ${
									getLetterStatus(guess[index], index, row) === "correct"
										? "bg-green-400/90 text-black border-green-500"
										: getLetterStatus(guess[index], index, row) === "present"
										? "bg-yellow-400/90 text-black border-yellow-500"
										: getLetterStatus(guess[index], index, row) === "absent"
										? "bg-neutral-400/90 text-black border-neutral-500/75"
										: "bg-neutral-100/80 border-neutral-200"
								}`}
							>
								{guess[index] || ""}
							</div>
						))}
					</div>
				))}
			</div>
			{!gameOver && (
				<div className="mt-6">
					<input
						type="text"
						value={currentGuess}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						maxLength={6}
						className="px-4 py-2 border-2 border-neutral-300 rounded-md shadow-sm focus:outline-none focus:border-neutral-500"
						placeholder="Enter your guess"
					/>
					<button
						onClick={submitGuess}
						className="ml-2 px-4 py-2 bg-neutral-600 text-white font-medium rounded-md shadow-md hover:bg-neutral-700 transition-all"
					>
						Submit
					</button>
				</div>
			)}
			{message && (
				<div className="mt-6 text-xl font-bold text-neutral-700 bg-white/80 px-6 py-3 rounded-lg shadow-lg">
					{message}
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

export default WordleGame;
