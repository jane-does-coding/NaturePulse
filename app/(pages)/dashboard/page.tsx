"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Sidebar from "@/components/Sidebar";

ChartJS.register(...registerables);

type DataType = {
	[key: string]: any;
};

const countryApiUrls: { [key: string]: { name: string; url: string } } = {
	US: {
		name: "United States",
		url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/US?unitGroup=metric&key=A3KSSCK9CC5CFTYFCD4TDTV9B&contentType=json",
	},
	CA: {
		name: "Canada",
		url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/canada?unitGroup=metric&key=A3KSSCK9CC5CFTYFCD4TDTV9B&contentType=json",
	},
	IN: {
		name: "India",
		url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/IN?unitGroup=metric&key=A3KSSCK9CC5CFTYFCD4TDTV9B&contentType=json",
	},
	FR: {
		name: "France",
		url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/FR?unitGroup=metric&key=A3KSSCK9CC5CFTYFCD4TDTV9B&contentType=json",
	},
	AU: {
		name: "Australia",
		url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/AU?unitGroup=metric&key=A3KSSCK9CC5CFTYFCD4TDTV9B&contentType=json",
	},
};

const data: DataType = {
	Global: {
		airQuality: [120, 100, 130, 140],
		waterLevel: [70, 75, 65, 80],
		deforestation: [12, 10, 11, 13],
		tempRise: [1.5, 1.6, 1.7, 1.8],
		wasteRate: [30, 35, 33, 28],

		text: {
			humidity: `Global Humidity: Average 70-80%<br />
                Affects air quality and comfort levels.<br />
                Tip: Use air conditioning for humidity control.`,
			solarRadiation: `Global Solar Radiation: Average 200-230 W/m²<br />
                Affects temperature and energy production.`,
			windSpeed: `Global Wind Speed: Average 5-8 m/s<br />
                Affects weather patterns and energy production.`,
		},
	},
};

const Page = () => {
	const [location, setLocation] = useState<string>("US");
	const [filteredData, setFilteredData] = useState<string>("Global");
	const [humidityData, setHumidityData] = useState<number[]>([]);
	const [solarRadiationData, setSolarRadiationData] = useState<number[]>([]);
	const [windSpeedData, setWindSpeedData] = useState<number[]>([]);
	const [cloudCoverData, setCloudCoverData] = useState<number[]>([]);
	const [pressureData, setPressureData] = useState<number[]>([]);
	const [timeLabels, setTimeLabels] = useState<string[]>([]);

	const selectedData = data[filteredData];

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const countryData = countryApiUrls[location];
				if (!countryData) {
					throw new Error("No API URL defined for the selected country.");
				}

				const response = await fetch(countryData.url);

				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const data = await response.json();
				console.log("API Response:", data);

				const todayDate = new Date().toISOString().split("T")[0];

				const today = data.days.find((day: any) => day.datetime === todayDate);

				if (today && today.hours && Array.isArray(today.hours)) {
					const hourlyHumidity = today.hours.map((hour: any) => hour.humidity);
					const hourlySolarRadiation = today.hours.map(
						(hour: any) => hour.solarradiation
					);
					const hourlyWindSpeed = today.hours.map(
						(hour: any) => hour.windspeed
					);
					const hourlyCloudCover = today.hours.map(
						(hour: any) => hour.cloudcover
					);
					const hourlyPressure = today.hours.map((hour: any) => hour.pressure);
					const hourlyLabels = today.hours.map((hour: any) => hour.datetime);

					setHumidityData(hourlyHumidity);
					setSolarRadiationData(hourlySolarRadiation);
					setWindSpeedData(hourlyWindSpeed);
					setCloudCoverData(hourlyCloudCover);
					setPressureData(hourlyPressure);
					setTimeLabels(hourlyLabels);
				} else {
					throw new Error(
						"Invalid data structure, 'hours' is missing or not an array for today's data."
					);
				}
			} catch (error) {
				console.error("Error fetching weather data:", error);
			}
		};

		fetchWeatherData();
	}, [location]);

	const formatTime = (datetime: string) => {
		const date = new Date(datetime);
		return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
	};

	return (
		<div className="flex w-full h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Content */}
			<div className="ml-[25vw] w-[75vw] p-[1.5rem] xl:p-[3rem] xl:pt-[2rem]">
				<h1 className="dirtyline36 text-[2rem] xl:text-[4rem] 2xl:text-[5rem] mx-auto text-center text-black">
					LiVe DatA
				</h1>
				{/* Filters */}
				<div className="flex flex-col gap-[1rem] mb-[2rem] mt-[0.5rem]">
					<div className="flex border-red-400/0 w-2/3 rounded-full p-[5px] mx-auto shadow-md bg-gradient-to-r from-red-200 via-sky-300 via-40% to-yellow-200">
						<select
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							className="w-full exo rounded-full py-[0.5rem] px-[2rem] outline-none focus:outline-none focus:ring-0 focus:border-transparent text-neutral-800 m-0 text-[1.2rem]"
						>
							{Object.entries(countryApiUrls).map(([code, { name }]) => (
								<option key={code} value={code}>
									{name}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Cards with Descriptions and Graphs */}
				<div className="grid grid-cols-2 gap-[1rem]">
					{/* Humidity Insights */}
					<div className="w-full aspect-[5/4] bg-indigo-100 border-2 border-indigo-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Humidity Insights
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{ __html: selectedData.text.humidity }}
						/>
						<Line
							data={{
								labels: timeLabels.map((a) => a.slice(0, 5)),
								datasets: [
									{
										label: "Humidity (%)",
										data:
											humidityData.length > 0
												? humidityData
												: selectedData.humidity,
										borderColor: "rgba(153, 102, 255, 1)",
										backgroundColor: "rgba(153, 102, 255, 0.2)",
									},
								],
							}}
						/>
					</div>

					{/* Solar Radiation Insights */}
					<div className="w-full aspect-[5/4] bg-yellow-100 border-2 border-yellow-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Solar Radiation Insights
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{
								__html: selectedData.text.solarRadiation,
							}}
						/>
						<Line
							data={{
								labels: timeLabels.map((a) => a.slice(0, 5)),
								datasets: [
									{
										label: "Solar Radiation (W/m²)",
										data:
											solarRadiationData.length > 0
												? solarRadiationData
												: selectedData.solarRadiation,
										borderColor: "rgba(255, 159, 64, 1)",
										backgroundColor: "rgba(255, 159, 64, 0.2)",
									},
								],
							}}
						/>
					</div>

					{/* Wind Speed Insights */}
					<div className="w-full aspect-[5/4] bg-sky-100 border-2 border-blue-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold exo text-neutral-800 exo">
							Wind Speed Insights
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{ __html: selectedData.text.windSpeed }}
						/>
						<Line
							data={{
								labels: timeLabels.map((a) => a.slice(0, 5)),
								datasets: [
									{
										label: "Wind Speed (m/s)",
										data:
											windSpeedData.length > 0
												? windSpeedData
												: selectedData.windSpeed,
										borderColor: "rgba(54, 162, 235, 1)",
										backgroundColor: "rgba(54, 162, 235, 0.2)",
									},
								],
							}}
						/>
					</div>

					{/* Cloud Cover */}
					<div className="w-full aspect-[5/4] bg-slate-100 border-2 border-gray-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold text-neutral-800">
							Cloud Cover Insights
						</h2>
						<p
							className="text-sm mb-[1rem] text-neutral-700"
							dangerouslySetInnerHTML={{ __html: selectedData.text.cloudCover }}
						/>
						<Line
							data={{
								labels: timeLabels.map((a) => a.slice(0, 5)),
								datasets: [
									{
										label: "Cloud Cover (%)",
										data:
											cloudCoverData.length > 0
												? cloudCoverData
												: selectedData.cloudCover,
										borderColor: "rgba(75, 192, 192, 1)",
										backgroundColor: "rgba(75, 192, 192, 0.2)",
									},
								],
							}}
						/>
					</div>

					{/* Pressure */}
					<div className="w-full aspect-[5/4] bg-green-100/80 border-2 border-green-200 rounded-[0.5rem] shadow-sm p-[1rem]">
						<h2 className="text-lg font-bold text-neutral-800 exo">
							Pressure Insights
						</h2>
						<p
							className="text-sm text-neutral-700 mb-[1rem] exo"
							dangerouslySetInnerHTML={{ __html: selectedData.text.pressure }}
						/>
						<Line
							data={{
								labels: timeLabels.map((a) => a.slice(0, 5)),
								datasets: [
									{
										label: "Pressure (hPa)",
										data:
											pressureData.length > 0
												? pressureData
												: selectedData.pressure,
										borderColor: "rgba(255, 99, 132, 1)",
										backgroundColor: "rgba(255, 99, 132, 0.2)",
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
