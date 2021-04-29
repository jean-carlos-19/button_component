import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Barra_Navegacion_Lateral({ items }) {
	return (
		<nav className='barra_lateral'>
			<ul>
				{items.map((item, posicion) => (
					<li key={posicion}>
						<Link to={item.direccion}> {item.nombre} </Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

Barra_Navegacion_Lateral.propTypes = {
	items: PropTypes.array.isRequired,
};

export { Barra_Navegacion_Lateral };
