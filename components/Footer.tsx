import { FaDev, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="w-full px-8 py-6">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y pt-[1.75rem] border-neutral-300 pb-6">
				{/* Left Section */}
				<div className="flex flex-col gap-4">
					<h2 className="text-black dirtyline36 text-[1.5rem] xl:text-[2rem] 2xl:text-[3.25rem] pl-[1rem]">
						NatURe
						<br />
						pUlSE
					</h2>
				</div>

				{/* Middle Section */}
				<div className="flex flex-col md:flex-row justify-between gap-[4rem] xl:gap-[5rem] mt-6 md:mt-0">
					<div>
						<h3 className="text-sm font-bold uppercase text-neutral-800 exo mb-2">
							Often Visited
						</h3>
						<ul className="space-y-1 xl:space-y-2">
							<li>
								<a href="#" className="text-neutral-800 exo">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="text-neutral-800 exo">
									About
								</a>
							</li>
							<li>
								<a href="#" className="text-neutral-800 exo">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-bold uppercase text-neutral-800 exo mb-2">
							Useful Links
						</h3>
						<ul className="space-y-1 xl:space-y-2">
							<li>
								<a href="#" className="text-neutral-800 exo">
									View data
								</a>
							</li>
							<li>
								<a href="#" className="text-neutral-800 exo">
									Mini games
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-bold uppercase text-neutral-800 exo mb-2">
							Social
						</h3>
						<ul className="space-y-1 xl:space-y-2">
							<li>
								<a href="#" className="text-neutral-800 exo">
									Gihub
								</a>
							</li>
							<li>
								<a href="#" className="text-neutral-800 exo">
									Devpost
								</a>
							</li>
							<li>
								<a href="#" className="text-neutral-800 exo">
									Linkedin
								</a>
							</li>
							<li>
								<a href="#" className="text-neutral-800 exo">
									Dribbble
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Right Section */}
				<div className="flex items-center gap-4 mt-6 md:mt-0">
					<a href="#" className="text-neutral-800 text-lg">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="#" className="text-neutral-800 text-lg">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="#" className="text-neutral-800 text-lg">
						<i className="fab fa-facebook"></i>
					</a>
				</div>
			</div>

			{/* Bottom Links */}
			<div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-neutral-600">
				<div className="flex gap-6 pl-[1rem]">
					{/* Devpost */}
					<a
						href="https://devpost.com/I-am-jane"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-600 hover:text-neutral-800 transition"
					>
						<FaDev size={24} />
					</a>

					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/in/yevheniia-simaka/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-600 hover:text-neutral-800 transition"
					>
						<FaLinkedin size={24} />
					</a>

					{/* GitHub */}
					<a
						href="https://github.com/jane-does-coding"
						target="_blank"
						rel="noopener noreferrer"
						className="text-neutral-600 hover:text-neutral-800 transition"
					>
						<FaGithub size={24} />
					</a>
				</div>
				<p className="mt-4 md:mt-0 mr-[1rem]">© 2025 NaturePulse</p>
			</div>
		</footer>
	);
};

export default Footer;
