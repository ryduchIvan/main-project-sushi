import "./specificItem.scss";
//Components
import { Preload } from "../../layout/preload/Preload";
//Other
import { closePopup, selectItem } from "./specificItem-slice";
import { addToCart } from "../cart/cart-slice";
//Instruments
import { useDispatch, useSelector } from "react-redux";
function SpecificItemLayout(props) {
	const { name, price, amount, image, weight, description, id, className } = props;
	const dispatch = useDispatch();
	const { status, item } = useSelector(selectItem);
	const removePopup = (event) => {
		if (event.target.classList.contains("popup") || ("header__close") || ("header__close__img")) {
			dispatch(closePopup());
		}
	}
	const infoForCart = {
		id,
		name,
		price,
		image,
		amount,
	}
	return (
		<div className={className ? `popup ${className}` : "popup"} onClick={removePopup}>
			<div className="popup__content">
				{
					status === "loading" && <Preload />
				}
				{
					!item.length && status !== "received" && <div className="error-message">Товар не знайден</div>
				}
				{
					item.length &&
					<>
						<div className="content__header">
							<div className="header__title">Сет "{name}"</div>
							<div className="header__close" >
								<img src="https://kilogramm.com.ua/image/close.svg" alt="popup-close" className="header__close_img" />
							</div>
						</div>
						<div className="content__row">
							<div className="row__image" >
								<img src={image} alt={name} />
							</div>
							<div className="row__info">
								<div className="info__desc">
									{description}
								</div>
								<div className="info__weight">
									<span>Вага:</span> {weight} <span>{amount} шт</span>
								</div>
								<div className="info__price">
									<span>Ціна:</span> {price} <span>грн</span>
								</div>
								<button onClick={() => {
									dispatch(addToCart(infoForCart))
								}} className="info__btn">
									В кошик +
								</button>
							</div>
						</div>
					</>
				}
			</div>
		</div >
	)
}

export { SpecificItemLayout };