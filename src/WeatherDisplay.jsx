import { React, useState } from "react";

const WeatherDisplay = ({
	data: {
		city,
		time,
		country,
		region,
		temp,
		condition,
		wind,
		is_day,
		precip,
		humidity,
		alt_time,
		alt_temp,
		alt_wind,
		alt_precip,
	},
}) => {
	const [alts, setAlts] = useState({
		temp: false,
		wind: false,
		precip: false,
	});

	const date = new Date(alt_time * 1000);

	function makeAlt(param) {
		setAlts({
			...alts,
			[param]: true,
		});
	}

	function removeAlt(param) {
		setAlts({
			...alts,
			[param]: false,
		});
	}

	return (
		<div>
			<div>
				<h2>{alts.temp ? alt_temp : temp}</h2>
				<button
					className={alts.temp ? "active" : ""}
					onClick={() => {
						makeAlt("temp");
					}}
				>
					°F
				</button>
				<button
					className={alts.temp ? "" : "active"}
					onClick={() => {
						removeAlt("temp");
					}}
				>
					°C
				</button>
				<img
					src={condition ? condition.icon : ""}
					alt={
						condition ? condition.text + " image" : "Weather image"
					}
				/>
			</div>
			<span className="condition">
				{condition ? condition.text : "unknown"}
			</span>
			<span className="location">
				{city}, {region}, {country}
			</span>
			<span className="time">
				{(() => {
					const dayNames = [
						"Sunday",
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
					];
					return dayNames[date.getDay()];
				})()}
				,{" "}
				{date.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				})}
			</span>
			<span>
				Wind: {alts.wind ? alt_wind + " mph" : wind + " km/h"} |
				Precipitation:{" "}
				{alts.precip ? alt_precip + " in" : precip + " mm"} | Humidity:
				{humidity + "%"}
			</span>
		</div>
	);
};

export default WeatherDisplay;
