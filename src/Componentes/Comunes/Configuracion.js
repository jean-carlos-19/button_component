import React, { useRef } from "react";
import { useConfiguracion } from "../Ganchos";
//import PropTypes from "prop-types";

function Configuracion() {
	const horientacion = useRef();
	const shadow = useRef();

	const { eventoHorientacion, eventoShadow } = useConfiguracion(horientacion, shadow);
	return (
		<section className='configuracion'>
			<div className='estado'>
				<h4>text shadow</h4>
				<p className='fila'>
					<label htmlFor='habilitado'>habilitado</label>
					<input ref={shadow} type='radio' value='habilitado' name='shadow' id='habilitado' onChange={eventoShadow} />

					<label htmlFor='desabilitado'>desabilitado</label>
					<input
						ref={shadow}
						type='radio'
						value='desabilitado'
						name='shadow'
						id='desabilitado'
						onChange={eventoShadow}
					/>
				</p>
			</div>
			<div className='estado'>
				<h4>horientacion</h4>
				<p className='fila'>
					<label htmlFor='izquierda'>izquierda</label>
					<input
						ref={horientacion}
						type='radio'
						value='izquierda'
						name='horientacion'
						id='izquierda'
						onChange={eventoHorientacion}
					/>

					<label htmlFor='derecha'>derecha</label>
					<input
						ref={horientacion}
						type='radio'
						value='derecha'
						name='horientacion'
						id='derecha'
						onChange={eventoHorientacion}
					/>
				</p>
			</div>
		</section>
	);
}

//Configuracion.propTypes = {};

export { Configuracion };
