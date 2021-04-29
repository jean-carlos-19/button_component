import React from "react";
import PropTypes from "prop-types";

function Boton({ nombre = "", css = "" }) {
	return <button className={css}>{nombre}</button>;
}

Boton.propTypes = {
	nombre: PropTypes.string.isRequired,
	css: PropTypes.string.isRequired,
};

export { Boton };
