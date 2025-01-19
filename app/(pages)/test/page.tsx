"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NASA_API_KEY = "M5SdSLo6nNFVQxCQ2dOxS54bUK7WGhTPhhyCY0Xx";

const AirQuality = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`https://api.nasa.gov/planetary/earth/air_quality?lat=37.7749&lon=-122.4194&api_key=${NASA_API_KEY}`
			);
			setData(response.data);
		};

		fetchData();
	}, []);

	return (
		<div className="bg-neutral-800">
			<h1>Air Quality Data</h1>
			{data ? (
				<div>
					<p>AQI: {data.aqi}</p>
					<p>Main Pollutant: {data.pollutant}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default AirQuality;
