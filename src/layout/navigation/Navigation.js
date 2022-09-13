//CSS
import "./navigation.scss";
//Instruments
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
function Navigation(params) {
	const { category } = useParams();
	return (
		<nav className="catalog__nav">
			<ul className="catalog__list">
				<Link to="/catalog/rolls" className="catalog__link"
					style={{
						backgroundColor: category === "rolls" ? "#dc410b" : "#f54f15"
					}}
				>Роли</Link>
				<Link to="/catalog/pizza" className="catalog__link"
					style={{
						backgroundColor: category === "pizza" ? "#dc410b" : "#f54f15"
					}}
				>Пицца</Link>
				<Link to="/catalog/sets" className="catalog__link"
					style={{
						backgroundColor: category === "sets" ? "#dc410b" : "#f54f15"
					}}
				>Сети</Link>
				<Link to="/catalog/beverages" className="catalog__link"
					style={{
						backgroundColor: category === "beverages" ? "#dc410b" : "#f54f15"
					}}
				>Напої</Link>
			</ul>
		</nav >
	)
}

export { Navigation }