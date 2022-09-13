//Instruments
import { Link } from "react-router-dom";
//CSS
import "./Footer.scss";
function Footer(params) {
	return (
		<footer className="footer">
			<div className="main__line">
				<div className="mina__container container">
					<div className="main__row">
						<div className="main__info">
							<ul className="main__list">
								<Link to="/" className="main__nav">Головна</Link>
								<Link to="/" className="main__nav">Доставка і оплата</Link>
							</ul>
							<div className="main__number">
								099 000 11 05
							</div>
							<div className="main__timetable">
								працюємо з 10:30 до 21:00
							</div>
						</div>
						<div className="main__link">
							<div className="main__logo">
								<img src="https://kilogramm.com.ua/image/logo.svg" alt="main__icon" className="main__icon" />
							</div>
							<div className="main__social">
								<a className="main__item" href="https://www.instagram.com/">
									<img src="https://kilogramm.com.ua/image/icon-insta.svg" alt="instagramm" />
								</a>
								<a href="https://www.facebook.com/" className="main__item">
									<img src="https://kilogramm.com.ua/image/icon-fb.svg" alt="facebook" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul className="footer__list">
				<li className="footer__link">Договір публічної оферти</li>
				<li className="footer__link">Політика конфіденційності</li>
			</ul>
			<p className="footer__text">
				Знак на товари і послуги «KILOGRAMM SUSHI PROJECT» захищено Законом України «Про авторські та суміжні права». Будь-яке використання знаку для товарів і послуг «KILOGRAMM SUSHI PROJECT» без дозволу «КІЛОГРАММ ФРАНЧАЙЗИНГ» тягне за собою наслідки передбачені чинним законодавством України.
				Розробка сайту by Rubik
			</p>
			<p className="footer__text">
				Розробка сайту by Ryduch
			</p>
		</footer>
	)
}

export { Footer }