//CSS
import "./succesfulOrder.scss";
//Instruments
import { Link } from "react-router-dom";

function SuccessfulOrder(params) {
	return (
		<div className="container">
			<h1>Ваше замовлення успішно прийняте</h1>
			<Link to="/catalog/sets" className="cart__btn">Повернутися до товарів</Link>
		</div>
	)
}

export { SuccessfulOrder };