"use client";
import { motion, AnimatePresence } from "framer-motion";

const carouselVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -30 },
};

export default function Carousel({ step, setStep }: any) {
	const steps = [
		{
			image: "/air.png",
			title: "Air Quality",
			description:
				"Track real-time air quality with detailed pollutant insights for your region.",
		},
		{
			image: "/ocean.jpg",
			title: "Water Levels",
			description:
				"Monitor water availability and quality for better awareness of global resources.",
		},
		{
			image: "/forest.png",
			title: "Deforestation",
			description:
				"See the impact of deforestation and reforestation efforts globally.",
		},
		{
			image: "/desert.png",
			title: "Climate Trends",
			description:
				"Understand changing climate patterns and their effects on our planet.",
		},
		{
			image: "/waste.jpg",
			title: "Waste Statistics",
			description:
				"Learn about waste management and how to reduce landfill contributions.",
		},
	];

	return (
		<div className="flex flex-col w-full mt-[3rem]">
			<motion.h1
				className="dirtyline36 text-[3rem] xl:text-[5rem] 2xl:text-[7rem] mx-auto text-center text-black"
				variants={carouselVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				WhAT CaN YOu FinD
			</motion.h1>
			<motion.p
				className="exo font-normal text-neutral-800 text-center mx-auto text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem]"
				variants={carouselVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				What can NaturePulse help you with?
			</motion.p>
			<div className="flex items-center justify-center w-full my-[5rem] mt-[3rem] xl:mt-[5rem] xl:my-[6rem] gap-[5rem]">
				<button
					className="text-neutral-800 text-[1.5rem] py-[1rem] px-[1rem] bg-white rounded-full shadow-md"
					onClick={() => step > 1 && setStep(step - 1)}
				>
					{"<"}
				</button>
				<div className="flex items-center justify-center w-[60vw]">
					<AnimatePresence mode="wait">
						{steps.map(
							(item, index) =>
								step === index + 1 && (
									<motion.div
										className="flex items-center justify-center"
										variants={carouselVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										key={index + 1}
										transition={{ duration: 0.3 }}
									>
										<img
											src={item.image}
											className="w-[25vw] aspect-[1] rounded-[0.5rem]"
											loading="eager"
											alt=""
										/>
										<div className="flex flex-col items-start justify-start text-start ml-[3rem]">
											<h1 className="text-neutral-800 text-[2.5rem] xl:text-[3rem] exo w-fit text-start">
												{item.title}
											</h1>
											<p className="text-neutral-800 text-[1rem] xl:text-[1.3rem] 2xl:text-[1.6rem] exo w-fit text-start">
												{item.description}
											</p>
											<a
												href="/dashboard"
												className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
											>
												check it out
											</a>
										</div>
									</motion.div>
								)
						)}
					</AnimatePresence>
				</div>
				<button
					className="text-neutral-800 text-[1.5rem] py-[1rem] px-[1rem] bg-white rounded-full shadow-md"
					onClick={() => step < steps.length && setStep(step + 1)}
				>
					{">"}
				</button>
			</div>
			<div className="flex items-center justify-center gap-2 w-[30vw] mx-auto">
				{steps.map((_, index) => (
					<motion.div
						key={index}
						className={`h-[0.25rem] w-full rounded-full transition-all ${
							step === index + 1 ? "bg-neutral-800/100" : "bg-neutral-800/30"
						}`}
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					></motion.div>
				))}
			</div>
		</div>
	);
}
