import React from "react";
import { PiWaves } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
	return (
		<div className="absolute z-10 w-full py-[0.35rem] xl:py-[0.7rem] bg-gradient-to-b from-neutral-800/30 to-neutral-800/0">
			<div className="w-[80%] mx-auto flex items-center justify-between">
				<a
					href=""
					className="text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem] flex gap-4 items-center justify-center exo font-semibold bg-neutral-900 text-neutral-100 px-[1.5rem] py-[0.35rem] rounded-full"
				>
					<TbMenuDeep />
					Home
				</a>
				<a
					href=""
					className="text-[1.4rem] xl:text-[1.7rem] 2xl:text-[1.9rem] flex gap-4 items-center justify-center exo font-semibold"
				>
					<PiWaves size={36} />
					NaturePulse
				</a>
				<a
					href=""
					className="text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.65rem] exo font-semibold"
				>
					Explore More
				</a>
			</div>
		</div>
	);
};

export default Navbar;
