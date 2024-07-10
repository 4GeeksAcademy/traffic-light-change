
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
		<div className="d-flex div-principal m-5 bg-dark p-5 row gap-2">

			<div className="col-4 no-responsivo rounded-3 m-auto border align-items-center bg-secondary p-5">
				<button onClick={click} id="red" className={"p-5 d-flex align-items-start rounded rounded-pill bg-danger " + red}></button>
				<button onClick={click} id="yellow" className={"p-5 align-items-center rounded rounded-pill bg-warning " + yellow}></button>
				<button onClick={click} id="green" className={"p-5 d-flex align-items-end rounded rounded-pill bg-success " + green}></button>
			</div>

		</div>
	);
};

export default Home;
