//CSS
import "./Header.scss";
//Other
import { selectCart, setMobileVersion } from "../../features/cart/cart-slice";
//Instruments
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
function Header(params) {
	const dispatch = useDispatch();
	const { items, mobileVersion } = useSelector(selectCart);
	const mobileHeader = useRef();
	const burger = useRef();
	const mobileLink = useRef();
	const closeMobileMenu = () => {
		mobileHeader.current.classList.remove("show-mobile-header")
		burger.current.classList.remove("transform-burger");
	}
	return (
		<header className="header">
			<div ref={burger} className="burger" onClick={() => {
				mobileHeader.current.classList.toggle("show-mobile-header")
				burger.current.classList.toggle("transform-burger");
			}}>
				<span></span>
			</div>
			<div className="header__mobile" ref={mobileHeader}>
				<nav className="header__mobile__nav">
					<ul className="header__mobile__list">
						<Link to="/" className="header__mobile__link" ref={mobileLink} onClick={closeMobileMenu}>Головна</Link>
						<Link to="/catalog/sets" className="header__mobile__link" ref={mobileLink} onClick={closeMobileMenu}>Сети</Link>
						<Link to="/catalog/rolls" className="header__mobile__link" ref={mobileLink} onClick={closeMobileMenu}>Ролли</Link>
						<Link to="/catalog/beverages" className="header__mobile__link" ref={mobileLink} onClick={closeMobileMenu}>Напої</Link>
						<Link to="/delivery" className="header__mobile__link" ref={mobileLink} onClick={closeMobileMenu}>Доставка</Link>
					</ul>
				</nav>
			</div>
			<div className="header__container container">
				<div className="header__row">
					<Link to="/"><img src="https://kilogramm.com.ua/image/catalog/logo.svg" alt="" className="header__icon" /></Link>
					<nav className="header__nav">
						<ul className="header__list">
							<Link to="/" className="header__link">Головна</Link>
							<Link to="/catalog/sets" className="header__link">Каталог</Link>
							<Link to="/delivery" className="header__link">Доставка</Link>
						</ul>
					</nav>
					<div className="header__info">
						<div className="header__data">
							<div className="header__phone-number">
								099 000 11 05
							</div>
							<div className="header__location">
								ПР-Т ШЕВЧЕНКА, 26
							</div>
						</div>
						<div className="header__bag" onClick={() => {
							dispatch(setMobileVersion(true));
						}}>
							<img src="https://kilogramm.com.ua/image/cart.svg" className="header__bag_img" />
							<span className="header__bag_quintity">{items.length}</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export { Header }