import React from "react";
import "./style.css"
import { ContainerProps } from "../../interfaces";
export const Container: React.FC<ContainerProps> = (props) => {
	const {label} = props
	return (
	<div className="container">
		<div className="label">
			<p>{label}</p>
		</div>
	</div>
	)
}