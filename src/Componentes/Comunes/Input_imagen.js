import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
function Input_imagen({ nombre_span = "", css = "", placeholder = "", css_input = "", mensaje = "" }) {
	const id = v4();
	console.log(mensaje, css_input);
	return (
		<div>
			<label htmlFor={id}>label</label>
			<div className={css}>
				<input className={"sin_estilo"} type='text' name='' id={id} placeholder={placeholder} />
				<span className='material-icons'> {nombre_span} </span>
			</div>
		</div>
	);
}

Input_imagen.propTypes = {
	placeholder: PropTypes.string.isRequired,
	nombre_span: PropTypes.string.isRequired,
	css: PropTypes.string.isRequired,
	css_input: PropTypes.string.isRequired,
	mensaje: PropTypes.string,
};

export { Input_imagen };
