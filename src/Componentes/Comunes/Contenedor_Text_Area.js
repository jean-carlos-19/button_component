import React from "react";
import PropTypes from "prop-types";
import {Text_Area} from './Text_Area';
function Contenedor_Text_Area({ inputs = {} }) {
	return  Object.keys(inputs).map((input, indice) => {
		const { css, css_descr, descripcion, placeholder, mensaje, nombre_span } = inputs[input];
		return (
			<div className='info_boton' key={indice}>
				<span> {descripcion} </span>
				<Text_Area css={css} css_descr={css_descr} placeholder={placeholder} mensaje={mensaje} nombre_span={nombre_span} />
			</div>
		);
	});
}

Contenedor_Text_Area.propTypes = {
    inputs: PropTypes.object,
};

export { Contenedor_Text_Area };
