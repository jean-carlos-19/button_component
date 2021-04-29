import React from "react";
import PropTypes from "prop-types";
import { Boton, Boton_Imagen } from "./index";

function Contenedor_Botones({ botones = {}, css = "", nombre_span = "" }) {
	const estilo = css ? css : "";
	const eleccionImagen = (nombre, css, nombre_span) => {
		return nombre_span ? (
			<Boton_Imagen nombre={nombre} nombre_span={nombre_span} css={css} />
		) : (
			<Boton nombre={nombre} css={css} />
		);
	};
	return (
		<section className={estilo}>
			{Object.keys(botones).map((boton, indice) => {
				const { css, descripcion, nombre } = botones[boton];
				return (
					<div className='info_boton' key={indice}>
						<span> {descripcion} </span>
						{eleccionImagen(nombre, css, nombre_span)}
					</div>
				);
			})}
		</section>
	);
}

Contenedor_Botones.propTypes = {
	botones: PropTypes.object.isRequired,
	css: PropTypes.string,
	nombre_span: PropTypes.string,
};

export { Contenedor_Botones };
