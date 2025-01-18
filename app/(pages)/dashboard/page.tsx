"use client";
import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

type DataType = {
	[key: string]: {
		airQuality: number[];
		waterLevel: number[];
		deforestation: number[];
		tempRise: number[];
		wasteRate: number[];
		text: {
			airQuality: string;
			waterLevel: string;
			deforestation: string;
			tempRise: string;
			wasteStats: string;
		};
	};
};

const data: DataType = {
	Global: {
		airQuality: [120, 100, 130, 140],
		waterLevel: [70, 75, 65, 80],
		deforestation: [12, 10, 11, 13],
		tempRise: [1.5, 1.6, 1.7, 1.8],
		wasteRate: [30, 35, 33, 28],
		text: {
			airQuality: `Global AQI: 120 (Unhealthy)<br />
                  Main Pollutant: PM2.5<br />
                  Region: Global`,
			waterLevel: `Reservoir Level: 75%<br />
                  Global Water Scarcity: 20% regions<br />
                  Conservation Tip: Reduce daily water use.`,
			deforestation: `Annual Tree Loss: 12M hectares<br />
                  Highest Loss: Amazon Rainforest<br />
                  Efforts: Reforestation campaigns`,
			tempRise: `Global Temp Rise: +1.5°C since 1900<br />
                  CO2 Emissions: 40B tons/year<br />
                  Transition: To renewable energy`,
			wasteStats: `Recycling Rate: 30% globally<br />
                  Main Issue: Single-use plastics<br />
                  Tip: Compost and ban plastics`,
		},
	},
};

const Page = () => {
	const [location, setLocation] = useState<string>("");
	const [filteredData, setFilteredData] = useState<string>("Global");

	const handleFilter = () => {
		setFilteredData(location in data ? location : "Global");
	};

	const selectedData = data[filteredData];

	return (
		<div className="flex w-full h-screen">
			{/* Sidebar */}
			<div className="w-[25vw] border-[2px] border-neutral-200 shadow-lg h-screen fixed left-0 top-0">
				<div className="flex flex-col gap-[0.75rem] xl:gap-[1rem] pt-[2rem] pl-[1.5rem] xl:pl-[2.25rem]">
					<a
						href="/"
						className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
					>
						Home
					</a>
					<a
						href="/about"
						className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
					>
						About
					</a>
					<a
						href="/dashboard"
						className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
					>
						View Data
					</a>
					<a
						href="/mini-games"
						className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
					>
						Mini Games
					</a>
					<a
						href="/"
						className="text-neutral-800 text-[1.25rem] xl:text-[1.5rem] exo"
					>
						Desktop App
					</a>
				</div>
			</div>

			{/* Content */}
			<div className="ml-[25vw] w-[75vw] p-[1.5rem] xl:p-[3rem] xl:pt-[2rem]">
				<h1 className="dirtyline36 text-[2rem] xl:text-[4rem] 2xl:text-[5rem] mx-auto text-center text-black">
					LiVe DatA
				</h1>
				{/* Filters */}
				<div className="flex flex-col gap-[1rem] mb-[2rem] mt-[0.5rem]">
					<div className="flex  border-red-400/0 w-2/3 rounded-full p-1 mx-auto shadow-md bg-gradient-to-r from-red-100 via-sky-300/75 via-40% to-yellow-100/100">
						<input
							type="text"
							placeholder="Enter location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							className="w-full exo rounded-full py-[0.5rem] px-[2rem] outline-none focus:outline-none focus:ring-0 focus:border-transparent text-neutral-800 m-0 text-[1.2rem]"
						/>
						<button
							onClick={handleFilter}
							className="bg-blue-500/0 text-black py-[0rem] rounded-full px-[2rem] pl-[1.5rem] font-semibold exo m-0"
						>
							Apply
						</button>
					</div>
				</div>

				{/* Cards with Descriptions and Graphs */}
				<div className="grid grid-cols-2 gap-[1rem]">
					{/* Air Quality Trends */}
					<div className="w-full aspect-[5/4] bg-blue-100 border-2 border-blue-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Air Quality Trends
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{ __html: selectedData.text.airQuality }}
						/>
						<Line
							data={{
								labels: ["Q1", "Q2", "Q3", "Q4"],
								datasets: [
									{
										label: "AQI",
										data: selectedData.airQuality,
										borderColor: "rgba(75,192,192,1)",
										backgroundColor: "rgba(75,192,192,0.2)",
									},
								],
							}}
						/>
					</div>

					{/* Water Resources */}
					<div className="w-full aspect-[5/4] bg-green-100 border-2 border-green-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Water Resources
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{ __html: selectedData.text.waterLevel }}
						/>
						<Bar
							data={{
								labels: ["Q1", "Q2", "Q3", "Q4"],
								datasets: [
									{
										label: "Reservoir Levels (%)",
										data: selectedData.waterLevel,
										backgroundColor: "rgba(75,192,192,0.6)",
									},
								],
							}}
						/>
					</div>

					{/* Deforestation Insights */}
					<div className="w-full aspect-[5/4] bg-yellow-100 border-2 border-yellow-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Deforestation Insights
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{
								__html: selectedData.text.deforestation,
							}}
						/>
						<Bar
							data={{
								labels: ["Q1", "Q2", "Q3", "Q4"],
								datasets: [
									{
										label: "Tree Loss (Mha)",
										data: selectedData.deforestation,
										backgroundColor: "rgba(255,205,86,0.6)",
									},
								],
							}}
						/>
					</div>

					{/* Climate Change Dashboard */}
					<div className="w-full aspect-[5/4] bg-red-100 border-2 border-red-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Climate Change Dashboard
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{ __html: selectedData.text.tempRise }}
						/>
						<Line
							data={{
								labels: ["Q1", "Q2", "Q3", "Q4"],
								datasets: [
									{
										label: "Temperature Rise (°C)",
										data: selectedData.tempRise,
										borderColor: "rgba(255,99,132,1)",
										backgroundColor: "rgba(255,99,132,0.2)",
									},
								],
							}}
						/>
					</div>

					{/* Waste Management Stats */}
					<div className="w-full aspect-[5/4] bg-purple-100 border-2 border-purple-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Waste Management Stats
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{ __html: selectedData.text.wasteStats }}
						/>
						<Bar
							data={{
								labels: ["Q1", "Q2", "Q3", "Q4"],
								datasets: [
									{
										label: "Recycling Rate (%)",
										data: selectedData.wasteRate,
										backgroundColor: "rgba(153,102,255,0.6)",
									},
								],
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
