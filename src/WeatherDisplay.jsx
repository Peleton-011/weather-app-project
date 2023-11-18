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
		alt_time,
		alt_temp,
		alt_wind,
		alt_precip,
	},
}) => {
	const [alts, setAlts] = useState({
		time: false,
		temp: false,
		wind: false,
		precip: false,
	});

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
				<img src={condition.icon} alt={condition.text + " image"} />
			</div>
		</div>
	);
};

export default WeatherDisplay;
