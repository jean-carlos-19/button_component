import React, { useState } from "react";
//import PropTypes from "prop-types";
import { Encabezado } from "../Componentes/Diseño";
import { Contenedor_Botones, Configuracion } from "../Componentes/Comunes";
import { info_boton } from "../Constantes";

function Botones() {
	const [estado, establecerEstado] = useState({ horientacion: "izquierda", shadow: "habilitado" });

	const estadoConfiguracion = ({ horientacion, shadow }) => {
		establecerEstado(Object.assign({}, estado, { horientacion, shadow }));
	};

	const { normal, focus, shadow, desabilitado, icono, dimensiones, color, color_hover } = info_boton;
	return (
		<section id='buttons'>
			<Configuracion estadoConfiguracion={estadoConfiguracion} />
			<Encabezado titulo='buttons' classCss='izquierdo' />
			<div className={"fila"}>
				<Contenedor_Botones botones={normal} />
				<Contenedor_Botones botones={focus} />
			</div>
			<div className={"fila"}>
				<Contenedor_Botones botones={shadow} />
			</div>
			<div className='basico'>
				<Contenedor_Botones botones={desabilitado} css={"fila"} />
			</div>
			<div className='basico'>
				<Contenedor_Botones botones={icono} css={"fila"} nombre_span={"local_grocery_store"} />
			</div>
			<div className='basico'>
				<Contenedor_Botones botones={dimensiones} css={"fila"} />
			</div>
			<div className='basico'>
				<Contenedor_Botones botones={color} css={"fila cuatro"} />
			</div>
			<div className='basico'>
				<Contenedor_Botones botones={color_hover} css={"fila cuatro"} />
			</div>
		</section>
	);
}

//Botones.propTypes = {};

export { Botones };
