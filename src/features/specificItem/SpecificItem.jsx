//CSS
//Instruments
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Other
import { loadItem, selectItem } from "./specificItem-slice";
import { SpecificItemLayout } from "./SpecificItemLayout";
function SpecificItem(props) {
	const { className } = props;
	const dispatch = useDispatch();
	const { item, id } = useSelector(selectItem);
	useEffect(() => {
		if (id) {
			dispatch(loadItem(id))
		}
	}, [id], dispatch);
	return (
		<>
			{
				item && <SpecificItemLayout {...item[0]} className={className} />
			}
		</>
	)
}

export { SpecificItem };