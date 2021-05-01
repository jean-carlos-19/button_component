import React from "react";
import PropTypes from "prop-types";
function Encabezado({ children, classCss }) {
	const arr_estilos = ["titulo_encabezado", classCss];
	let estilos = "";
	arr_estilos.forEach(estilo => {
		if (!estilos) estilos = `${estilos} ${estilo}`;
	});
	return (
		<section className={estilos}>
			{children}
		</section>
	);
}

Encabezado.propTypes = {
	children: PropTypes.element,
	classCss: PropTypes.string,
};

export { Encabezado };
