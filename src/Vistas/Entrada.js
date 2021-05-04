import React from "react";
import { Encabezado } from "../Componentes/Diseño";
import { Contenedor_Inputs,Contenedor_Text_Area } from "../Componentes/Comunes";
import { info_inputs } from "../Constantes";
function Entrada() {
	const { normal, error, desabilitado, helpertext, icono, text, dimensiones, fullWidth,area } = info_inputs;
	return (
		<section id='input'>
			<Encabezado classCss={"inzquierdo"}>
				<h3>inputs</h3>
			</Encabezado>
			<div className='basico'>
				<Contenedor_Inputs inputs={normal} />
			</div>
			<div className='basico'>
				<Contenedor_Inputs inputs={error} />
			</div>
			<div className='basico'>
				<Contenedor_Inputs inputs={desabilitado} />
			</div>
			<div className='basico'>
				<Contenedor_Inputs inputs={helpertext} />
			</div>
			<div className='basico'>
				<Contenedor_Inputs inputs={icono} />
			</div>
			<div className='basico'>
				<Contenedor_Inputs inputs={text} />
			</div>
			<div className='basico'>
				<Contenedor_Inputs inputs={dimensiones} />
			</div>
			<div className='basico fullwidt'>
				<Contenedor_Inputs inputs={fullWidth} />
			</div>
			<div className="basico">
				<Contenedor_Text_Area inputs={area} />
			</div>
		</section>
	);
}

export { Entrada };
