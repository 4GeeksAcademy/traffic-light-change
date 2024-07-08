
import React, { useState } from "react"


const Home = () => {

	let [red, setRed] = useState('border-danger')
	let [green, setGreen] = useState('border-success')
	let [yellow, setYellow] = useState('border-waring')
	

	function click(event) {

		if (event.target.id == 'red') {
			setRed('border-primary')
			setGreen('bg-opacity-50 border-success')
			setYellow("bg-opacity-50 border-warning")
		}
		else if (event.target.id == 'yellow') {
			setRed('bg-opacity-50 border-danger')
			setGreen('bg-opacity-50 border-success')
			setYellow('border-primary')
		}
		else {
			setRed('bg-opacity-50 border-danger')
			setGreen('border-primary')
			setYellow('bg-opacity-50 border-warning')
		}
	}

	return (
		<div className="d-flez flex-colum justify-content-text w-100 h-100v mx-auto bg-dark p-5 gap-2">
			<button onClick={click} id="red" className={"p-5 rounded rounded-pill bg-danger "+ red}></button>
			<button onClick={click} id="yellow" className={"p-5 rounded rounded-pill bg-warning "+ yellow}></button>
			<button onClick={click} id="green" className={"p-5 rounded rounded-pill bg-success "+ green}></button>
		</div>
	);
};

export default Home;
