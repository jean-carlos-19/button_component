import React from "react";
import PropTypes from "prop-types";
import { Input, Input_imagen } from "./index";
function Contenedor_Inputs({ inputs = {} }) {
	const eleccionImagen = (placeholder = "", css = "", nombre_span = undefined, mensaje = "", css_descr) => {
		return !nombre_span ? (
			<Input css={css} placeholder={placeholder} mensaje={mensaje} css_descr={css_descr} />
		) : (
			<Input_imagen css={css} placeholder={placeholder} nombre_span={nombre_span} mensaje={mensaje} />
		);
	};
	return Object.keys(inputs).map((input, indice) => {
		const { css, css_descr, descripcion, placeholder, mensaje, nombre_span } = inputs[input];
		return (
			<div className='info_boton' key={indice}>
				<span> {descripcion} </span>
				{eleccionImagen(placeholder, css, nombre_span, mensaje, css_descr)}
			</div>
		);
	});
}

Contenedor_Inputs.propTypes = {
	inputs: PropTypes.object,
};

export { Contenedor_Inputs };
