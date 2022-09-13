//Instruments
import { useDispatch } from "react-redux";
//Other
import { addToCart } from "../cart/cart-slice";
import { openPopup } from "../specificItem/specificItem-slice";
//Components
import { ButtonPizza } from "../../layout/buttonsPizza/ButtonPizza";
function CatalogItem(props) {
	const { id, name, price, image, weight, amount, category } = props;

	const dispatch = useDispatch();
	const handleCart = (name, price, image, amount) => {
		dispatch(addToCart(infoForCart));
	}
	const infoForCart = {
		id,
		name,
		price,
		image,
		amount,
	}
	const unblockPopup = () => {
		dispatch(openPopup({ category, id }))
	}
	return (
		<>
			<div className="catalog__item" >
				<div className="catalog__desc">
					Склад
					<img src="https://www.svgrepo.com/show/423712/menu-kebab-vertical.svg" className="catalog__desc__icon" />
				</div>
				<div className="catalog__img" onClick={unblockPopup}>
					<img src={image} alt={name} className="img" />
				</div>
				<h2 className="catalog__title">
					<span>
						{category === "sets" && "Сет"}
						{category === "rolls" && "Рол"}
						{category === "pizza" && "Пицца"}
					</span>"{name}"
				</h2>
				{category === "pizza" && <ButtonPizza optionOne="28см" optionTwo="38см" />}
				<div className="catalog__info">
					<div className="catalog__info__item catalog__price">{price}
						<span>грн</span></div>
					<div className="catalog__info__item catalog__amount">{weight && weight + "г"}
						<span>{amount && amount + "шт"}</span>
					</div>
					<button className="catalog__info__item catalog__btn" onClick={handleCart}>
						<span>+</span>
					</button>
				</div>
			</div>
		</>
	)
}

export { CatalogItem };