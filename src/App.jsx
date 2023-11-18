import { useState } from "react";
import "./App.css";

import api from "../api";

function App() {
	const [search, setSearch] = useState("cats");
	const [data, setData] = useState({});
	const [error, setError] = useState(false);
	async function fetchNew() {
		try {
			let res = await fetch(
				"http://api.weatherapi.com/v1/current.json?key=" +
					api.key +
					"&q=" +
					search,
				{ mode: "cors" }
			);
			res = await res.json();
			const {
				location: { name, localtime, country, localtime_epoch, region },
				current: {
					temp_c,
					temp_f,
					condition,
					wind_mph,
					wind_kph,
					is_day,
					precip_in,
					precip_mm,
				},
			} = res;
			setData({
				city: name,
				time: localtime,
				country: country,
				region: region,
				temp: temp_c,
				condition: condition,
				wind: wind_kph,
				is_day: is_day,
				precip: precip_mm,
				alt_time: localtime_epoch,
				alt_temp: temp_f,
				alt_wind: wind_mph,
				alt_precip: precip_in,
			});
		} catch (e) {
			setError(true);
			console.log(e);
		}
	}

	return (
		<>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						fetchNew();
					}
				}}
			/>
			{/* {error ? (
				<img src={data} alt={search + " image"} />
			) : (
				<p>Error: {search} not found</p>
			)} */}
		</>
	);
}

export default App;
