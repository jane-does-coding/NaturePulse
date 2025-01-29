"use client";
import { motion } from "framer-motion";

const fadeInVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export default function TwoColumnSection({ title, items, circle }: any) {
	return (
		<div className="pt-[12vh]">
			<motion.h1
				className="dirtyline36 text-[3rem] xl:text-[5rem] 2xl:text-[7rem] mx-auto text-center text-black"
				variants={fadeInVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				{title}
			</motion.h1>
			<div className="flex w-[80vw] gap-[15vw] mx-auto mt-[1rem] xl:mt-[2rem]">
				{items.map((item: any, index: any) => (
					<motion.div
						key={index}
						className="flex flex-col items-center justify-center text-center"
						variants={fadeInVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
					>
						<img
							src={item.image}
							className={` w-[30vw] aspect-[1] object-cover ${
								circle ? "rounded-full" : "rounded-[0.5rem]"
							}`}
							alt=""
						/>
						<h2 className="text-neutral-900 font-normal text-[1.75rem] xl:text-[2rem] exo tracking-[-2px] mt-[1.5rem]">
							{item.heading}
						</h2>
						<p className="exo text-neutral-800 w-[90%] mx-auto text-[1.15rem] xl:text-[1.4rem] 2xl:text-[1.75rem] my-[0.25rem] xl:my-[0.75rem] 2xl:leading-[2rem] font-light">
							{item.description}
						</p>
						{item.link && (
							<a
								href={item.link}
								className="text-neutral-50 lowercase bg-neutral-900 mt-[1rem] px-[1.5rem] py-[0.45rem] text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] border-2 dirtyline36 transition-all font-light relative hover:bg-neutral-800/90 rounded-[10rem] mb-[2rem]"
							>
								{item.linkText}
							</a>
						)}
					</motion.div>
				))}
			</div>
		</div>
	);
}
