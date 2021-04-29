import React from "react";
import PropTypes from "prop-types";

function Boton_Imagen({ nombre = "", nombre_span = "", css = "" }) {
	return (
		<button className={css}>
			<span className='material-icons'> {nombre_span} </span>
			<p>{nombre} </p>
		</button>
	);
}

Boton_Imagen.propTypes = {
	nombre: PropTypes.string.isRequired,
	nombre_span: PropTypes.string.isRequired,
	css: PropTypes.string.isRequired,
};

export { Boton_Imagen };
