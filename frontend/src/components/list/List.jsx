import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listitem/ListItem";
import "./list.scss";
import React, { useRef, useState } from "react";

const List = ({ _id, list }) => {
	const [sliderNumber, setSliderNumber] = useState(0);
	const listRef = useRef();

	const handleClick = (direction) => {
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && sliderNumber > 0) {
			setSliderNumber(sliderNumber - 1);
			listRef.current.style.transform = `translateX(${315 + distance}px)`;
		}
		if (direction === "right" && sliderNumber < 6) {
			setSliderNumber(sliderNumber + 1);
			listRef.current.style.transform = `translateX(${-315 + distance}px)`;
		}
	};

	return (
		<div className="list-container">
			<span className="list-title">{list.title}</span>
			<div className="list-wrapper">
				<ArrowBackIosOutlined
					className="slider-arrow left"
					onClick={() => handleClick("left")}
				/>
				<div className="wrapper-container" ref={listRef}>
					{list.content.map((item) => (
						<React.Fragment key={item._id}>
							<div className="listitem-section">
								<ListItem key={item.id} item={item} />
							</div>
						</React.Fragment>
					))}
				</div>
				<ArrowForwardIosOutlined
					className="slider-arrow right"
					onClick={() => handleClick("right")}
				/>
			</div>
		</div>
	);
};

export default List;
