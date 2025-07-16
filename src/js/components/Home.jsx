import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Celda } from "./Celda";

//create your first component

const Home = () => {
	return (
		<Celda className="d-flex text-white justify-content-center align-items-center vh-100">
			<Celda text="H" />
			<Celda text="1" />
			<Celda text="2" />
			<Celda text="3" />
			<Celda text="4" />
			<Celda text="5" />
			<Celda text="6" />
		</Celda>
	)
};

export default Home;