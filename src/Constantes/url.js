import React from "react";
import { Botones } from "../Vistas/Botones";
const urls = [
	{
		nombre: "colors",
		direccion: "/colors",
		exact: true,
		componente: <h2>colors</h2>,
	},
	{
		nombre: "typography",
		direccion: "/typography",
		exact: true,
		componente: <h2>typography</h2>,
	},
	{
		nombre: "spaces",
		direccion: "/spaces",
		exact: true,
		componente: <h2>spaces</h2>,
	},
	{
		nombre: "buttons",
		direccion: "/",
		exact: true,
		componente: <Botones />,
	},
	{
		nombre: "grid",
		direccion: "/grid",
		exact: true,
		componente: <h2>grid</h2>,
	},
];
export { urls };
