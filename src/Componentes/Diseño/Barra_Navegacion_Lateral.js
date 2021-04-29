import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
function Barra_Navegacion_Lateral({ items }) {
	const ubicacion = useLocation();
	const [ruta_actual, establecerRutaActual] = useState(ubicacion.pathname);

	useEffect(() => {
		const ruta = ubicacion.pathname;
		establecerRutaActual(ruta);
	}, [ubicacion.pathname]);
	return (
		<nav className='barra_lateral'>
			<ul>
				{items.map((item, posicion) => (
					<li key={posicion}>
						{ruta_actual === item.direccion ? (
							<Link className='foco' to={item.direccion}>
								{" "}
								{item.nombre}{" "}
							</Link>
						) : (
							<Link to={item.direccion}> {item.nombre} </Link>
						)}
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
