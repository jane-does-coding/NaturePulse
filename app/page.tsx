"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Carousel from "@/components/Carousel";
import TwoColumnSection from "@/components/TwoColumnSection";

export default function Home() {
	const [step, setStep] = useState(1);

	const globalEcoStatsItems = [
		{
			image: "/globe.jpg",
			heading: "Real-Time Eco Data",
			description: "Access live environmental metrics from around the globe.",
			link: "/dashboard",
			linkText: "View Live Data",
		},
		{
			image: "/laptop.jpg",
			heading: "Engaging Mini-Games",
			description: "Learn and act through fun, interactive challenges.",
			link: "/games",
			linkText: "Try a Game",
		},
	];

	const whyChooseUsItems = [
		{
			image: "/air.png",
			heading: "Expert Team",
			description:
				"Our team of experts is dedicated to providing accurate and up-to-date environmental data.",
		},
		{
			image: "/air.png",
			heading: "Real Impact",
			description:
				"We empower individuals and organizations to make a tangible difference in the world.",
		},
	];

	const testimonialsItems = [
		{
			image: "/air.png",
			heading: "Jane Doe",
			description:
				"NaturePulse has transformed how I understand and interact with the environment. Highly recommend!",
		},
		{
			image: "/air.png",
			heading: "John Smith",
			description:
				"The mini-games are not only fun but also incredibly educational. Great job!",
		},
	];

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
				<Carousel step={step} setStep={setStep} />

				<Marquee
					className="bg-neutral-200/65 border-[1px] border-neutral-600 py-6 mt-[15vh]"
					speed={50}
				>
					<h2 className="dirtyline36 text-neutral-900 text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] mx-8">
						ExPLOre ThE KnoWledGe
					</h2>
					<h2 className="dirtyline36 text-neutral-900 text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] mx-8">
						ExPLOre ThE KnoWledGe
					</h2>
					<h2 className="dirtyline36 text-neutral-900 text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] mx-8">
						ExPLOre ThE KnoWledGe
					</h2>
					<h2 className="dirtyline36 text-neutral-900 text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] mx-8">
						ExPLOre ThE KnoWledGe
					</h2>
					<h2 className="dirtyline36 text-neutral-900 text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] mx-8">
						ExPLOre ThE KnoWledGe
					</h2>
				</Marquee>

				<TwoColumnSection
					title="GLobAl EcO StATs"
					items={globalEcoStatsItems}
				/>
				<TwoColumnSection title="Why Choose Us" items={whyChooseUsItems} />
				<TwoColumnSection title="What People Say" items={testimonialsItems} />

				<Footer />
			</div>
		</div>
	);
}
