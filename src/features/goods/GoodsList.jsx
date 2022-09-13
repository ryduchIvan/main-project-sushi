//CSS
import "./goods.scss";
//Instruments
import { useDispatch, useSelector } from "react-redux";
import { loadGoods, selectGoods, findsGoods } from "./goods-slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//Other
import { selectSearch } from "../search/search-slice";
import { selectItem } from "../specificItem/specificItem-slice";
//Components
import { CatalogItem } from "./GoodsItem";
import { Navigation } from "../../layout/navigation/Navigation";
import { Preload } from "../../layout/preload/Preload";
import { Search } from "../search/Search";
import { Cart } from "../cart/Cart";
import { SpecificItem } from "../specificItem/SpecificItem";
function GoodsList(params) {
	const { category } = useParams();
	const store = useSelector(selectGoods);
	const { status, list, error } = store;
	const search = useSelector(selectSearch);
	const { id } = useSelector(selectItem);
	const goods = useSelector(store => findsGoods(list, search))
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGoods(category));
	}, [category, dispatch]);
	return (

		<section className="catalog main">
			{
				<SpecificItem className={`${id ? "open-popup" : ""}`} />
			}
			<Navigation />
			<div className="catalog__container">
				{
					status === "loading" && <Preload />
				}
				<Search />
				<div className="catalog__box">
					<div className="catalog__grid">
						{
							status === "rejected" && error && <h1>{error}</h1>
						}
						{
							status === "received" ? goods.map(item => <CatalogItem key={item.id} {...item} category={category} />) : ""
						}
					</div>
					<Cart />
				</div>
			</div>
		</section>
	)
}

export { GoodsList }