//CSS
import "./HomePage.scss"
//Instruments
import { Link } from "react-router-dom";
function HomePage() {
	return (
		<main className="main">
			<div className="main__cover container">
				<div className="cover__img">
				</div>
				<Link to="/catalog/sets" className="main__button">Відкрити меню</Link>
			</div>
		</main >
	)
}

export { HomePage }