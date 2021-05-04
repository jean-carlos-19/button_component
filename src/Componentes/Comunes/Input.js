import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
function Input({ placeholder = "", css = "", mensaje = "", css_descr = "" }) {
	const id = v4();
	return (
		<div>
			<label htmlFor={id}>label</label>
			<input className={css} type='text' name='' id={id} placeholder={placeholder} />
			<span className={!css_descr ? "" : css_descr}> {mensaje} </span>
		</div>
	);
}

Input.propTypes = {
	placeholder: PropTypes.string,
	css: PropTypes.string,
	mensaje: PropTypes.string.isRequired,
	css_descr: PropTypes.string,
};
export { Input };
