"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [step, setStep] = useState(1);

	return (
		<div className="">
			<Navbar />
			<div className="flex w-[85vw] xl:w-[80vw] mx-auto h-[110vh] items-center justify-center">
				<img
					src="/bg2.jpg"
					className="absolute top-0 left-0 w-full h-[110vh] z-[-1] opacity-[1]"
					alt=""
				/>
				<div className="absolute top-0 left-0 w-full h-[110vh] z-[-1]  bg-gradient-to-br from-sky-800/40 to-70% to-yellow-100/20"></div>
				<div className="absolute top-[80vh] left-0 w-full h-[30vh] z-[-1]  bg-gradient-to-b from-neutral-100/0 to-neutral-100 "></div>
				<h1 className="dirtyline36 mt-[-20vh] text-[11rem] xl:text-[14rem] 2xl:text-[18rem] w-full text-neutral-50 font-extrabold leading-[11rem] xl:leading-[15rem] 2xl:leading-[18rem] tracking-[0] flex flex-col text-center items-center justify-center">
					<span className="mr-auto text-left w-full">NatURe</span>
					<span className="ml-auto text-right w-full">pUlSE</span>
				</h1>
			</div>

			<div className="bg-gradient-to-b from-neutral-100 via-sky-100/85 via-60% to-yellow-100/80">
				{/* Carousel */}
				<div className="flex flex-col w-full mt-[3rem]">
					<h1 className="dirtyline36 text-[3rem] xl:text-[5rem] 2xl:text-[7rem] mx-auto text-center text-black">
						WhAT CaN YOu FinD
					</h1>
					<p className="exo font-normal text-neutral-800 text-center mx-auto text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem]">
						What can NaturePulse help you with?
					</p>
					<div className="flex items-center justify-center w-full my-[5rem] mt-[3rem] xl:mt-[5rem] xl:my-[6rem] gap-[5rem]">
						<button
							className="text-neutral-800 text-[1.5rem] py-[1rem] px-[1rem] bg-white rounded-full shadow-md"
							onClick={() => step > 1 && setStep(step - 1)}
						>
							{"<"}
						</button>
						<div className="flex items-center justify-center w-[60vw]">
							{step == 1 && (
								<div className="flex items-center justify-center">
									<img
										src="/air.png"
										className="w-[25vw] aspect-[1] rounded-[0.5rem]"
										loading="eager"
										alt=""
									/>
									<div className="flex flex-col items-start justify-start text-start ml-[3rem]">
										<h1 className="text-neutral-800 text-[2.5rem] xl:text-[3rem] exo w-fit text-start">
											Air Quality
										</h1>
										<p className="text-neutral-800 text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem] exo w-fit text-start">
											Track real-time air quality with detailed pollutant
											insights for your region.
										</p>
										<a
											href="/dashboard"
											className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
										>
											check it out
										</a>
									</div>
								</div>
							)}
							{step == 2 && (
								<div className="flex items-center justify-center">
									<img
										src="/ocean.jpg"
										className="w-[25vw] aspect-[1] rounded-[0.5rem]"
										loading="eager"
										alt=""
									/>
									<div className="flex flex-col items-start justify-start text-start ml-[3rem]">
										<h1 className="text-neutral-800 text-[2.5rem] xl:text-[3rem] exo w-fit text-start">
											Water Levels
										</h1>
										<p className="text-neutral-800 text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem] exo w-fit text-start">
											Monitor water availability and quality for better
											awareness of global resources.
										</p>
										<a
											href="/dashboard"
											className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
										>
											check it out
										</a>
									</div>
								</div>
							)}
							{step == 3 && (
								<div className="flex items-center justify-center">
									<img
										src="/forest.png"
										className="w-[25vw] aspect-[1] rounded-[0.5rem]"
										loading="eager"
										alt=""
									/>
									<div className="flex flex-col items-start justify-start text-start ml-[3rem]">
										<h1 className="text-neutral-800 text-[2.5rem] xl:text-[3rem] exo w-fit text-start">
											Deforestation
										</h1>
										<p className="text-neutral-800 text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem] exo w-fit text-start">
											See the impact of deforestation and reforestation efforts
											globally.
										</p>
										<a
											href="/dashboard"
											className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
										>
											check it out
										</a>
									</div>
								</div>
							)}
							{step == 4 && (
								<div className="flex items-center justify-center">
									<img
										src="/desert.png"
										className="w-[25vw] aspect-[1] rounded-[0.5rem]"
										loading="eager"
										alt=""
									/>
									<div className="flex flex-col items-start justify-start text-start ml-[3rem]">
										<h1 className="text-neutral-800 text-[2.5rem] xl:text-[3rem] exo w-fit text-start">
											Climate Trends
										</h1>
										<p className="text-neutral-800 text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem] exo w-fit text-start">
											Understand changing climate patterns and their effects on
											our planet.
										</p>
										<a
											href="/dashboard"
											className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
										>
											check it out
										</a>
									</div>
								</div>
							)}
							{step == 5 && (
								<div className="flex items-center justify-center">
									<img
										src="/waste.jpg"
										className="w-[25vw] aspect-[1] rounded-[0.5rem]"
										loading="eager"
										alt=""
									/>
									<div className="flex flex-col items-start justify-start text-start ml-[3rem]">
										<h1 className="text-neutral-800 text-[2.5rem] xl:text-[3rem] exo w-fit text-start">
											Waste Statistics
										</h1>
										<p className="text-neutral-800 text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem] exo w-fit text-start">
											Learn about waste management and how to reduce landfill
											contributions.
										</p>
										<a
											href="/dashboard"
											className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
										>
											check it out
										</a>
									</div>
								</div>
							)}
						</div>
						<button
							className="text-neutral-800 text-[1.5rem] py-[1rem] px-[1rem] bg-white rounded-full shadow-md"
							onClick={() => step < 5 && setStep(step + 1)}
						>
							{">"}
						</button>
					</div>
					{/* indicator lines */}
					<div className="flex items-center justify-center gap-2 w-[30vw] mx-auto">
						<div
							className={`h-[0.25rem] w-full rounded-full  transition-all ${
								step == 1 ? "bg-neutral-800/100" : "bg-neutral-800/30"
							}`}
						></div>
						<div
							className={`h-[0.25rem] w-full rounded-full ${
								step == 2 ? "bg-neutral-800/100" : "bg-neutral-800/30"
							}`}
						></div>
						<div
							className={`h-[0.25rem] w-full rounded-full  transition-all ${
								step == 3 ? "bg-neutral-800/100" : "bg-neutral-800/30"
							}`}
						></div>
						<div
							className={`h-[0.25rem] w-full rounded-full  transition-all ${
								step == 4 ? "bg-neutral-800/100" : "bg-neutral-800/30"
							}`}
						></div>
						<div
							className={`h-[0.25rem] w-full rounded-full  transition-all ${
								step == 5 ? "bg-neutral-800/100" : "bg-neutral-800/30"
							}`}
						></div>
					</div>
				</div>

				{/* 2 cols description */}
				<div className="pt-[12vh]">
					<h1 className="dirtyline36 text-[3rem] xl:text-[5rem] 2xl:text-[7rem] mx-auto text-center text-black">
						GLobAl EcO StATs
					</h1>
					<div className="flex w-[80vw] gap-[15vw] mx-auto mt-[1rem] xl:mt-[2rem]">
						<div className="flex flex-col items-center justify-center text-center">
							<img
								src="/globe.jpg"
								className="rounded-[0.5rem] w-[30vw] aspect-[1] object-cover"
								alt=""
							/>
							<h2 className="text-neutral-900 font-normal text-[1.75rem] xl:text-[2rem] exo tracking-[-2px] mt-[1.5rem]">
								Real-Time Eco Data
							</h2>
							<p className="exo text-neutral-800 w-[90%] mx-auto text-[1.15rem] xl:text-[1.4rem] 2xl:text-[1.75rem] my-[0.25rem] xl:my-[0.75rem] 2xl:leading-[2rem] font-light">
								Access live environmental metrics from around the globe.
							</p>
							<a
								href=""
								className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] border-2 dirtyline36 transition-all font-light relative  hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
							>
								View Live Data
							</a>
						</div>
						<div className="flex flex-col items-center justify-center text-center">
							<img
								src="/laptop.jpg"
								className="rounded-[0.5rem] w-[30vw] aspect-[1] object-cover"
								alt=""
							/>
							<h2 className="text-neutral-900 font-normal text-[1.75rem] xl:text-[2rem] exo tracking-[-2px] mt-[1.5rem]">
								Engaging Mini-Games
							</h2>
							<p className="exo text-neutral-800 w-[95%] mx-auto text-[1.15rem] xl:text-[1.4rem] 2xl:text-[1.75rem] my-[0.25rem] xl:my-[0.75rem] 2xl:leading-[2rem] font-light">
								Learn and act through fun, interactive challenges.
							</p>
							<a
								href=""
								className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
							>
								Try a Game
							</a>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
}
