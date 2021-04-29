import React from "react";
//import PropTypes from "prop-types";
import { urls } from "../Constantes";
import { Switch, Route } from "react-router-dom";

function Rutas() {
	return (
		<>
			<Switch>
				{urls.map((url, posicion) => (
					<Route key={posicion} path={url.direccion} exact={url.exact}>
						{url.componente}
					</Route>
				))}
			</Switch>
		</>
	);
}

//Rutas.propTypes = {};

export { Rutas };
