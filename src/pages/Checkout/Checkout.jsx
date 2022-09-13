//CSS
import "./checkout.scss";
//Components
import { Cart } from "../../features/cart/Cart";
//Instrumenst
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
//Other
import { handlerValidate } from "../../features/cart/cart-slice";
function Checkout(params) {
	const dispatch = useDispatch();

	const [typeOfHouse, setTypeOfHouse] = useState("apartment");
	const [time, setTime] = useState("now");
	const [typeOfDelivery, setTypeOfDelivery] = useState("delivery");
	const [quintityOfPeople, setQuintityOfPeople] = useState(0);
	const [quintityOfSticks, setQuintityOfSticks] = useState(0);
	//Validate
	const {
		register,
		formState: {
			errors, isValid
		},
		handleSubmit
	} = useForm({
		mode: "onTouched"
	});
	useEffect(() => {
		if (isValid) {
			dispatch(handlerValidate(true))
		} else {
			dispatch(handlerValidate(false))
		}
	}, [isValid])
	//Validate
	const addQuintityOfPeople = () => {
		setQuintityOfPeople(quintityOfPeople => quintityOfPeople + 1)
	}
	const minusQuintityOfPeople = () => {
		setQuintityOfPeople(quintityOfPeople => quintityOfPeople - 1)
		if (quintityOfPeople === 0) {
			setQuintityOfPeople(0)
		}
	}
	const addQuintityOfSticks = () => {
		setQuintityOfSticks(quintityOfStick => quintityOfStick + 1)
	}
	const minusQuintityOfSticks = () => {
		setQuintityOfSticks(quintityOfStick => quintityOfStick - 1)
		if (quintityOfSticks === 0) {
			setQuintityOfSticks(0);
		}
	}
	const handlePleacholder = (event) => {
		if (event.target.classList.contains("checkout__input") || ("checkout__subtitle")) {
			event.target.parentNode.classList.add("active");
		}
	}
	const handleTime = () => {
		setTime(time === "now" ? "setTime" : "now");
	}
	const handleHouse = () => {
		setTypeOfHouse(typeOfHouse === "apartment" ? "house" : "apartment");
	}
	const setDelivery = () => {
		setTypeOfDelivery("pickup");
	}
	const setPickup = () => {
		setTypeOfDelivery("delivery");
	}
	return (
		<div className="checkout main" onClick={handlePleacholder}>
			<div className="checkout__container container">
				<div className="checkout__flex">
					<div className="checkout__content">
						<iframe className="checkout__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80519.90597217655!2d34.744174350890184!3d50.900644497947525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41290220fc73a461%3A0xdb74f6366b836c28!2z0KHRg9C80YssINCh0YPQvNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MDAwMA!5e0!3m2!1sru!2sua!4v1661546565018!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						<div className="checkout__warm">
							Доставка здійснюється тільки в межах красної зони. Детальніше на сторінці <span>Доставки</span>.
						</div>
						<div className="checkout__box">
							<section className="checkout__row pleacholder" >
								{errors.name ? <div className="checkout__row__error-title">{errors.name.message}</div> : ""}
								<input {...register("name", {
									required: "Не заповнене імя",
									pattern: {
										value: "^[?!,.а-яА-ЯёЁ0-9\s]+$",
										message: "Не вірне імя"
									}
								})} name="name" type="text" className="checkout__input" />
								<span className="checkout__subtitle" name="pleacholder">Ім'я</span>
								<div className="checkout__quintity">
									<div className="checkout__quintity__text">
										Кількість людей
									</div>
									<div className="checkout__quintity__button">
										<div className="cart__buttons">
											<button onClick={addQuintityOfPeople} >+</button>
											<span>{quintityOfPeople}</span>
											<button onClick={minusQuintityOfPeople}>-</button>
										</div>
									</div>
								</div>
							</section>
							<section className="checkout__row pleacholder">
								{errors.phone ? <div className="checkout__row__error-title">{errors.phone.message}</div> : ""}
								<input {...register("phone", {
									required: "Не заповний номер",
									pattern: {
										value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
										message: "Не вірний телефон"
									}
								})} name="phone" type="text" className="checkout__input" />
								<span className="checkout__subtitle">Телефон</span>
								<div className="checkout__quintity">
									<div className="checkout__quintity__text">
										Комплектів звичайних паличок
									</div>
									<div className="checkout__quintity__button">
										<div className="cart__buttons">
											<button onClick={addQuintityOfSticks} >+</button>
											<span>{quintityOfSticks}</span>
											<button onClick={minusQuintityOfSticks}>-</button>
										</div>
									</div>
								</div>
							</section>
							<section className="checkout__radio">
								<form action="" className="checkout__radio-row">
									<label className="radio__row_item">
										Доставка
										<input type="radio" className="radion__row__input" name="option1" onClick={setPickup} />
										<span className="radion__row__btn" ></span>
									</label>
									<label className="radio__row_item">
										Самовивіз
										<input type="radio" className="radion__row__input" name="option1" onChange={setDelivery} />
										<span className="radion__row__btn"></span>
									</label>
								</form>
							</section>
							<section className="checkout__radio">
								<form className="checkout__radio-row">
									<label className="radio__row_item">
										ОПЛТАГА ГОТІВКОЮ
										<input type="radio" className="radion__row__input" name="option2" />
										<span className="radion__row__btn"></span>
									</label>
									<label className="radio__row_item">
										ОПЛАТА ЧЕРЕЗ ТЕРМІНАЛ
										<input type="radio" className="radion__row__input" name="option2" />
										<span className="radion__row__btn"></span>
									</label>
								</form>
							</section>
							<section className="checkout__options">
								<div className="checkout__options__btn catalog__buttons" >
									<button onClick={handleHouse} style={{
										transition: "all 0.3s ease-in-out",
										flex: "0 1 50%",
										fontSize: "20px",
										backgroundColor: typeOfHouse === "apartment" ? "black" : "white",
										color: typeOfHouse === "apartment" ? "white" : "black"
									}}>Квартира</button>
									<button onClick={handleHouse} style={{
										transition: "all 0.3s ease-in-out",
										flex: "0 1 50%",
										fontSize: "20px",
										backgroundColor: typeOfHouse === "house" ? "black" : "white",
										color: typeOfHouse === "house" ? "white" : "black"
									}
									}>Будинок</button>
								</div >
								<div className="checkout__options__btn catalog__buttons" >
									<button onClick={handleTime} style={{
										transition: "all 0.3s ease-in-out",
										flex: "0 1 50%",
										fontSize: "18px",
										backgroundColor: time === "now" ? "black" : "white",
										color: time === "now" ? "white" : "black"
									}}>Якомого найшвидше</button>
									<button onClick={handleTime} style={{
										transition: "all 0.3s ease-in-out",
										flex: "0 1 50%",
										fontSize: "20px",
										backgroundColor: time === "setTime" ? "black" : "white",
										color: time === "setTime" ? "white" : "black"
									}
									}>Обрати час</button>
								</div >
							</section>
							<section className="checkout__info">
								<div className="info__row">
									<div className="info__row__items">
										<div className="info__row__item pleacholder">
											{errors.city ? <div className="checkout__row__error-title">{errors.city.message}</div> : ""}
											<input {...register("city", {
												required: "Місто не заповнене",
												pattern: {
													value: /^[A-Za-z\s]+$/,
													message: "Не вірне місто"
												}
											})} type="text" className="checkout__input__info checkout__input" />
											<span className="checkout__subtitle">Місто</span>
										</div>

										{
											typeOfDelivery === "delivery" ? typeOfHouse === "apartment" && <>
												<div className="info__row__item pleacholder">
													{errors.street ? <div className="checkout__row__error-title">{errors.street.message}</div> : ""}
													<input {...register("street", {
														required: "Не заповнина вулиця",
														pattern: {
															value: /^[A-Za-z\s]+$/,
															message: "Не вірна вулиця"
														}
													})} type="text" className="checkout__input__info checkout__input" />
													<span className="checkout__subtitle">Вулиця</span>
												</div>
												<div className="info__row__flex">
													<div className="info__row__item pleacholder">
														{errors.numberOfHouse ? <div className="checkout__row__error-title">{errors.numberOfHouse.message}</div> : ""}
														<input {...register("numberOfHouse", {
															required: false,
															pattern: {
																value: /^\d+$/,
																message: "Не вірний номер будинку"
															}
														})} type="text" className="checkout__input__info checkout__input checkout__input_small" />
														<span className="checkout__subtitle">Номер будинку</span>
													</div>
													<div className="info__row__item pleacholder">
														<input type="text" className="checkout__input__info checkout__input checkout__input_small " />
														<span className="checkout__subtitle">Під'їзд</span>
													</div>
												</div>
												<div className="info__row__flex">
													<div className="info__row__item pleacholder">
														<input type="text" className="checkout__input__info checkout__input checkout__input_small" />
														<span className="checkout__subtitle">Поверх</span>
													</div>
													<div className="info__row__item pleacholder">
														<input type="text" className="checkout__input__info checkout__input checkout__input_small" />
														<span className="checkout__subtitle">Номер квартири</span>
													</div>
												</div>
											</> : <div className="info__row__flex">
												<div className="info__row__item pleacholder">
													<input type="text" className="checkout__input__info checkout__input checkout__input_small" />
													<span className="checkout__subtitle">Будинок</span>
												</div>
											</div>
										}

									</div>
									<div className="info__row__items">

										{
											time === "setTime" && <>
												<div className="info__row__flex">
													<div className="info__row__item pleacholder">
														<input type="text" className="checkout__input__info checkout__input checkout__input_small" />
														<span className="checkout__subtitle">Дата</span>
													</div>
													<div className="info__row__item pleacholder">
														<input type="text" className="checkout__input__info checkout__input checkout__input_small " />
														<span className="checkout__subtitle">Час</span>
													</div>
												</div>
											</>
										}

										<div className="pleacholder">
											<textarea name="" id="" cols="30" rows="10" className="info__row_textarea " />
											<span className="checkout__subtitle" name="pleacholder">Коментар</span>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
					<Cart />
				</div>
			</div>
		</div>
	)
}

export { Checkout };