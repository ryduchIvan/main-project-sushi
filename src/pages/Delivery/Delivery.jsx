import "./deleviry.scss";
function Delivery(params) {
	return (
		<main class="delivery main">
			<div class="delivery__container container">
				<div class="delivery__row">
					<h1>Замовления</h1>
					<div class="delivery__text">
						<p>Замовити суші можна:</p>
						<p>На цьому сайті;</p>
						<p>По телефону;</p>
						<p>У пункті самовивозу.</p>
					</div>
				</div>
				<div class="delivery__row">
					<h1>Доставка</h1>
					<div class="delivery__text">
						<p>Зона доставки:</p>
						<p>Час доставки - 60 хвилин* </p>
						<p>Вартість доставки при покупці на суму до 1000 грн - 60 грн.</p>
						<p>Вартість доставки при покупці на суму понад 1000 грн - безкоштовно.</p>
					</div>
				</div>
				<div class="delivery__row">
					<h1>Оплата</h1>
					<div class="delivery__text">
						<p>Оплата при доставці можливо готівкою або карткою</p>
						<p>Оплата при самовивозі можлива готівкою,</p>
						<p>або картою.</p>
					</div>
				</div>
				<p>* Якщо час доставки на даний момент перевищує 60 хвилин - з Вами зв'яжеться співробітник для уточнення часу доставки.</p>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80519.90597217667!2d34.74417435089016!3d50.90064449794751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41290220fc73a461%3A0xdb74f6366b836c28!2z0KHRg9C80YssINCh0YPQvNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MDAwMA!5e0!3m2!1sru!2sua!4v1661981321333!5m2!1sru!2sua" className="dilver__map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</main>
	)
}

export { Delivery }