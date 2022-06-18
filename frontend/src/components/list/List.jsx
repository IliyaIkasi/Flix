import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listitem/ListItem";
import "./list.scss";
import React, { useRef, useState } from "react";

const List = ({ list }) => {
	const [sliderNumber, setSliderNumber] = useState(0);
	const listRef = useRef();
	console.log(list.content);

	const handleClick = (direction) => {
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && sliderNumber > 0) {
			setSliderNumber(sliderNumber - 1);
			listRef.current.style.transform = `translateX(${315 + distance}px)`;
		}
		if (direction === "right" && sliderNumber < 1) {
			setSliderNumber(sliderNumber + 1);
			listRef.current.style.transform = `translateX(${-315 + distance}px)`;
		}
	};
	return (
		<div className="list-container" key={list._id}>
			<span className="list-title">{list.title}</span>
			<div className="list-wrapper">
				<ArrowBackIosOutlined
					className="slider-arrow left"
					onClick={() => handleClick("left")}
				/>
				<div className="wrapper-container" ref={listRef}>
					{list.content.map((item) => (
						<div className="listitem-section">
							<ListItem id={item} />
						</div>
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
