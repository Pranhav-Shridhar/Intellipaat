// What are keys in React?

// Keys are used in React to check all items and to track changes actively. They are used to directly check if an item has been added or removed from a list.

import React from "react";
import ReactDOM from "react-dom";
// Component to be extracted
function MenuItems(props) {
	const item = props.item;
	return <li>{item}</li>;
}

// Component that will return an
// unordered list
function Navmenu(props) {
	const list = props.menuitems;
	const updatedList = list.map((listItems) => {
		return <MenuItems key={listItems.toString()} item={listItems} />;
	});

	return <ul>{updatedList}</ul>;
}

const menuItems = [1, 2, 3, 4, 5];

ReactDOM.render(
	<Navmenu menuitems={menuItems} />,
	document.getElementById("root")
);
