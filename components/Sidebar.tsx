"use client";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
	return (
		<div className="w-[25vw] border-[2px] border-neutral-200 shadow-lg h-screen fixed left-0 top-0">
			<div className="flex flex-col gap-[0.75rem] xl:gap-[1rem] pt-[2rem] pl-[1.5rem] xl:pl-[2.25rem]">
				<Link
					href="/"
					className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
				>
					Home
				</Link>
				{/* <Link
					href="/about"
					className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
				>
					About
				</Link> */}
				<Link
					href="/dashboard"
					className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
				>
					View Data
				</Link>
				<Link
					href="/articles"
					className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
				>
					Articles
				</Link>
				<Link
					href="/mini-games"
					className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
				>
					Mini Games
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
