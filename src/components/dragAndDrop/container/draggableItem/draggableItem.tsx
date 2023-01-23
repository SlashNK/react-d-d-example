import React from "react";
import { DraggableItemProps } from "../../../interfaces";

export const DraggableItem: React.FC<DraggableItemProps> = (props) => {
	const {label1, label2} = props
	return (
		<div className="item">
			<div>
			</div>
			<div>
			</div>
		</div>
	)
}