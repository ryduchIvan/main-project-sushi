//Instruments
import { useState } from "react";
//CSS
import "./button-pizza.scss";
function ButtonPizza(props) {
	const { optionOne, optionTwo, className } = props;
	const [activeButton, setActiveButton] = useState("28см");
	const handleButtons = () => {
		setActiveButton(activeButton === "28см" ? "38см" : "28см")
	}
	return (
		<div className={activeButton === "28см" ? `catalog__buttons сatalog__buttons_small ` : `catalog__buttons сatalog__buttons_big `} >
			<button style={{
				transition: "all 0.3s ease-in-out",
				flex: "0 1 50%",
				fontSize: "20px",
				backgroundColor: activeButton === "28см" ? "black" : "white",
				color: activeButton === "28см" ? "white" : "black"
			}} onClick={handleButtons}>{optionOne}</button>
			<button onClick={handleButtons} style={{
				transition: "all 0.3s ease-in-out",
				flex: "0 1 50%",
				fontSize: "20px",
				backgroundColor: activeButton === "38см" ? "black" : "white",
				color: activeButton === "38см" ? "white" : "black"
			}
			}>{optionTwo}</button>
		</div >
	)
}

export { ButtonPizza }