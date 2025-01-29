"use client";
import React, { useState } from "react";
import { PiWaves } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaDev, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative z-10 w-full py-[0.35rem] xl:py-[0.7rem] bg-gradient-to-b from-neutral-800/30 to-neutral-800/0">
			<div className="w-[80%] mx-auto flex items-center justify-between">
				<button
					onClick={toggleMenu}
					className="text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.3rem] flex gap-6 items-center justify-center exo font-normal bg-neutral-900 text-neutral-100 px-[1.5rem] py-[0.35rem] rounded-full"
				>
					<TbMenuDeep />
					Home
				</button>
				<a
					href=""
					className="text-[1.4rem] xl:text-[1.7rem] 2xl:text-[1.9rem] flex gap-4 items-center justify-center exo font-semibold"
				>
					<PiWaves size={36} />
					NaturePulse
				</a>
				<div className="flex gap-6">
					{/* Devpost */}
					<a
						href="https://devpost.com/I-am-jane"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-100 shadow-md hover:text-white transition"
					>
						<FaDev size={26} />
					</a>

					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/in/yevheniia-simaka/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-100 shadow-md hover:text-white transition"
					>
						<FaLinkedin size={26} />
					</a>

					{/* GitHub */}
					<a
						href="https://github.com/jane-does-coding"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-100 shadow-md hover:text-white transition"
					>
						<FaGithub size={26} />
					</a>
				</div>
			</div>

			{/* Menu Animation */}
			<motion.div
				initial={{ y: "-100%", opacity: 0 }}
				animate={isMenuOpen ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 1 }}
				transition={{ duration: 0.35 }}
				className="absolute top-0 left-0 w-full bg-blue-200 h-screen flex flex-col items-center justify-center space-y-6"
			>
				<button
					onClick={toggleMenu}
					className="absolute top-[0.35rem] xl:top-[0.7rem] left-[10vw] text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.3rem] flex gap-6 items-center justify-center exo font-normal bg-neutral-900 text-neutral-100 px-[1.5rem] py-[0.35rem] rounded-full"
				>
					Close
				</button>
				<div className="flex w-full h-screen">
					<div className="w-1/2"></div>
					<div className="w-1/2 flex flex-col gap-[0.75rem] pt-[10vh]">
						<motion.a
							href="/"
							initial={{ opacity: 0 }}
							animate={{ opacity: isMenuOpen ? 1 : 0 }}
							transition={{ delay: 0.2 }}
							className="text-neutral-800 exo text-[1.75rem] xl:text-[2rem] 2xl:text-[3rem]"
						>
							Home
						</motion.a>
						<motion.a
							href="/dashboard"
							initial={{ opacity: 0 }}
							animate={{ opacity: isMenuOpen ? 1 : 0 }}
							transition={{ delay: 0.6 }}
							className="text-neutral-800 exo text-[1.75rem] xl:text-[2rem] 2xl:text-[3rem]"
						>
							View Data
						</motion.a>
						<motion.a
							href="/mini-games"
							initial={{ opacity: 0 }}
							animate={{ opacity: isMenuOpen ? 1 : 0 }}
							transition={{ delay: 0.8 }}
							className="text-neutral-800 exo text-[1.75rem] xl:text-[2rem] 2xl:text-[3rem]"
						>
							Mini Games
						</motion.a>
						<motion.a
							href="/articles"
							initial={{ opacity: 0 }}
							animate={{ opacity: isMenuOpen ? 1 : 0 }}
							transition={{ delay: 1.0 }}
							className="text-neutral-800 exo text-[1.75rem] xl:text-[2rem] 2xl:text-[3rem]"
						>
							Articles
						</motion.a>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Navbar;
