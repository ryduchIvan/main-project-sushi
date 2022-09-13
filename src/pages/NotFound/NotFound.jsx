//Instruments
import { Link } from "react-router-dom";
//CSS
import "./notFound.scss";
function NotFound(params) {
	return (
		<div className="main">
			<h1 className="main__title">This pages does not exist. Please click on button!</h1>
			<Link className="main__btn" to="/">Go to Home page</Link>
		</div >
	)
}

export { NotFound }