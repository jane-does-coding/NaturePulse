import React from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const page = () => {
	return (
		<div>
			<div className="flex w-full h-screen">
				<Sidebar />

				<div className="ml-[25vw] w-[75vw] p-[1.5rem] xl:p-[3rem] xl:pt-[2rem]">
					<h1 className="dirtyline36 text-neutral-800 text-center mx-auto w-fit text-[4rem] mb-4">
						MiNI gAMes
					</h1>
					<div className="grid grid-cols-2 gap-[1.5rem]">
						<Link href="/mini-games/memory">
							<div className="w-full aspect-[7/4] bg-indigo-100 border-2 border-indigo-200 rounded-[1rem] shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all cursor-pointer p-[1.5rem] flex flex-col justify-between">
								<div>
									<h2 className="text-2xl font-bold exo text-indigo-800">
										Memory Game
									</h2>
									<p className="text-neutral-600 mt-2">
										Match pairs of cards to test your memory and learn about the
										environment.
									</p>
								</div>
								<div className="text-right">
									<span className="text-indigo-800 text-sm font-semibold">
										Play Now →
									</span>
								</div>
							</div>
						</Link>

						<Link href="/mini-games/hangman">
							<div className="w-full aspect-[7/4] bg-yellow-100 border-2 border-yellow-200 rounded-[1rem] shadow-lg hover:shadow-xl hover:bg-yellow-50 transition-all cursor-pointer p-[1.5rem] flex flex-col justify-between">
								<div>
									<h2 className="text-2xl font-bold exo text-yellow-800">
										Hangman
									</h2>
									<p className="text-neutral-600 mt-2">
										Guess the word to save the planet! Learn eco-friendly terms
										while playing.
									</p>
								</div>
								<div className="text-right">
									<span className="text-yellow-800 text-sm font-semibold">
										Play Now →
									</span>
								</div>
							</div>
						</Link>

						<Link href="/mini-games/wordle">
							<div className="w-full aspect-[7/4] bg-sky-100 border-2 border-blue-200 rounded-[1rem] shadow-lg hover:shadow-xl hover:bg-sky-50 transition-all cursor-pointer p-[1.5rem] flex flex-col justify-between">
								<div>
									<h2 className="text-2xl font-bold exo text-sky-800">
										Wordle
									</h2>
									<p className="text-neutral-600 mt-2">
										Guess the eco-themed word in six tries. A fun way to expand
										your green vocabulary!
									</p>
								</div>
								<div className="text-right">
									<span className="text-sky-800 text-sm font-semibold">
										Play Now →
									</span>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
