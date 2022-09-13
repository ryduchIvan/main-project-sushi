//Other
import { selectCart } from "./cart-slice"
import { removeFromCart, addQuantity, minusQuantity, setMobileVersion } from "./cart-slice";
//CSS
import "./cart.scss";
//Components
import { EmptyCart } from "./EmptyCart";
//Intruments
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Cart(params) {
	const { category } = useParams();
	const dispatch = useDispatch();
	const { items, validate, mobileVersion } = useSelector(selectCart);
	const totalPriceWithoutDelivery = () => {
		let price = 0;
		items.map(item => {
			const currentPrice = +item.price * +item.quintity;
			price += currentPrice;
		})
		return price;
	}
	const priceForFreeDelivery = () => {
		return 1000 - totalPriceWithoutDelivery();
	}
	const priceOfDilevry = () => {
		if (priceForFreeDelivery() > 0) {
			return 60;
		} else {
			return 0;
		}
	};
	return (<>
		<div className={`sidebar__bg ${mobileVersion ? "show-sidebar" : ""}`} onClick={(event) => {
			if (event.target.classList.contains("sidebar__bg")) {
				dispatch(setMobileVersion(false))
			}
		}}>
			<div className="sidebar">
				<div className="aside__box">
					<div className="aside__title">Кошик</div>
					{
						items.length ? <>
							<ul className="aside__list">
								{
									items.map(item => <li key={item.id}>
										<div className="cart__item">
											<img className="cart__img" src={item.image} alt={item.name} />
											<div className="cart__flex">
												<div className="cart__row">
													<div className="cart__name">{item.name}</div>
													<div className="cart__close" onClick={() => {
														dispatch(removeFromCart(item.id));
													}}>
														х
													</div>
												</div>
												<div className="cart__row">
													<div className="cart__buttons">
														<button onClick={() => {
															dispatch(addQuantity(item.id));
														}}>+</button>
														<span>{item.quintity}</span>
														<button onClick={() => {
															dispatch(minusQuantity(item.id));
														}}>-</button>
													</div>
													<div className="cart__price">
														{+item.price * +item.quintity} грн
													</div>
												</div>
											</div>
										</div>
									</li>)
								}
							</ul>
							<div className="price">
								<div className="price__item price__item_without-delivery">
									<span>Сума</span>
									<span>{totalPriceWithoutDelivery()} грн</span>
								</div>
								{
									priceForFreeDelivery() > 0 ? <div className="price__item price__item_devilery">
										<div>Доставка
											<p>До безкоштовної доставки залишилося <b>{priceForFreeDelivery()}</b> грн</p>
										</div>
										<span>{priceOfDilevry()} грн</span>
									</div> : <div className="price__item price__item_devilery">
										<span>Доставка</span>
										<span>{priceOfDilevry()} грн</span>
									</div>
								}
								<div className="price__item price__item_total">
									<span>Всього</span>
									<span>{+totalPriceWithoutDelivery() + priceOfDilevry()}</span>
								</div>
							</div>
							{
								category ? <Link to="/checkout" className="cart__btn">Замовити</Link> :
									validate ? <Link to="/successful-order" className="cart__btn noDisabled" disabled={!validate}>Замовити</Link>
										: <Link to="/successful-order" className="cart__btn disabled" onClick={event => event.preventDefault()} disabled={!validate}>Замовити</Link>
							}
						</> : <EmptyCart />
					}
				</div >
			</div>
		</div>
	</>
	)
}

export { Cart }