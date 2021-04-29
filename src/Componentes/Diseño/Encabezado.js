import React from "react";
import PropTypes from "prop-types";
function Encabezado({ titulo, classCss }) {
	const arr_estilos = ["titulo_encabezado", classCss];
	let estilos = "";
	arr_estilos.forEach(estilo => {
		if (!estilos) estilos = `${estilos} ${estilo}`;
	});
	return (
		<section className={estilos}>
			<h4> {titulo} </h4>
		</section>
	);
}

Encabezado.propTypes = {
	titulo: PropTypes.string.isRequired,
	classCss: PropTypes.string,
};

export { Encabezado };
