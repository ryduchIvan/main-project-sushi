//CSS
import "./search.scss";
//Instruments
import { useDispatch, useSelector } from "react-redux";
//Other
import { setSearch } from "./search-slice";
import { selectSearch } from "./search-slice";
function Search(params) {
	const search = useSelector(selectSearch);
	const dispatch = useDispatch();
	const handleSearch = (event) => {
		dispatch(setSearch(event.target.value));
		console.log(event.target.value);
	}
	return (
		<div className="catalog__search">
			<input type="text" placeholder="Пошук" onChange={handleSearch} value={search} />
		</div>
	)
}

export { Search }