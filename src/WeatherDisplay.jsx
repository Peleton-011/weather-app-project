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
					onClick={() => {
						makeAlt("temp");
					}}
				>
					°F
				</button>
				<button
					onClick={() => {
						removeAlt("temp");
					}}
				>
					°C
				</button>
			</div>
		</div>
	);
};

export default WeatherDisplay;
