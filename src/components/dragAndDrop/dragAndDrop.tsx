import React from "react";
import "./style.css"
import { Container } from "./container/container";
export const DragAndDrop: React.FC = () => {
	return (
		<div>
			<Container label="Контейнер 1"/>
			<Container label="Контейнер 2"/>
			<Container label="Контейнер 3"/>
		</div>
	)
}