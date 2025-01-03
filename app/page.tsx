import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<div className="flex w-[85vw] xl:w-[80vw] mx-auto h-[110vh] items-center justify-center">
				<img
					src="/bg2.jpg"
					className="absolute top-0 left-0 w-full h-[110vh] z-[-1] opacity-[1]"
					alt=""
				/>
				<div className="absolute top-0 left-0 w-full h-[110vh] z-[-1]  bg-neutral-800/10"></div>
				<div className="absolute top-[90vh] left-0 w-full h-[20vh] z-[-1]  bg-gradient-to-b from-neutral-100/0 to-neutral-100 "></div>
				<h1 className="dirtyline36 mt-[-10vh] text-[11rem] xl:text-[14rem] 2xl:text-[18rem] w-full text-neutral-50 font-extrabold leading-[11rem] xl:leading-[15rem] 2xl:leading-[18rem] tracking-[0] flex flex-col text-center items-center justify-center">
					<span className="mr-auto text-left w-full">NatURe</span>
					<span className="ml-auto text-right w-full">pUlSE</span>
				</h1>
			</div>

			{/* 2 cols description */}
			<div className="pt-[7.5vh]">
				<h1 className="dirtyline36 text-[3rem] xl:text-[5rem] 2xl:text-[7rem] mx-auto text-center text-black">
					Global Eco Stats
				</h1>
				<div className="flex w-[80vw] gap-[15vw] mx-auto mt-[1rem] xl:mt-[2rem]">
					<div className="flex flex-col items-center justify-center text-center">
						<img
							src="/globe.jpg"
							className="rounded-[0.5rem] w-[30vw] aspect-[1] object-cover"
							alt=""
						/>
						<h2 className="text-neutral-900 font-semibold text-[1.75rem] xl:text-[2rem] exo tracking-[-2px] mt-[1.5rem]">
							Real-Time Eco Data
						</h2>
						<p className="text-neutral-700 w-[90%] mx-auto text-[1.15rem] xl:text-[1.4rem] 2xl:text-[1.75rem] my-[0.25rem] xl:my-[0.75rem] 2xl:leading-[2rem] font-extralight">
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
						<h2 className="text-neutral-900 font-semibold text-[1.75rem] xl:text-[2rem] exo tracking-[-2px] mt-[1.5rem]">
							Engaging Mini-Games
						</h2>
						<p className="text-neutral-700 w-[95%] mx-auto text-[1.15rem] xl:text-[1.4rem] 2xl:text-[1.75rem] my-[0.25rem] xl:my-[0.75rem] 2xl:leading-[2rem] font-extralight">
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
		</div>
	);
}
