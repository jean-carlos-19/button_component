import React from "react";
import { useConfiguracion } from "../Ganchos";
import PropTypes from "prop-types";

function Configuracion({ estadoConfiguracion = f => f }) {
	const { horientacion, shadow, eventoHorientacion, eventoShadow } = useConfiguracion(estadoConfiguracion);
	return (
		<section className='configuracion'>
			<div className='estado'>
				<h4>text shadow</h4>
				<p className='fila'>
					<label htmlFor='habilitado'>habilitado</label>
					<input
						type='radio'
						value='habilitado'
						name='shadow'
						id='habilitado'
						onChange={eventoShadow}
						checked={shadow === "habilitado"}
					/>

					<label htmlFor='desabilitado'>desabilitado</label>
					<input
						type='radio'
						value='desabilitado'
						name='shadow'
						id='desabilitado'
						onChange={eventoShadow}
						checked={shadow === "desabilitado"}
					/>
				</p>
			</div>
			<div className='estado'>
				<h4>horientacion</h4>
				<p className='fila'>
					<label htmlFor='izquierda'>izquierda</label>
					<input
						type='radio'
						value='izquierda'
						name='horientacion'
						id='izquierda'
						onChange={eventoHorientacion}
						checked={horientacion === "izquierda"}
					/>

					<label htmlFor='derecha'>derecha</label>
					<input
						type='radio'
						value='derecha'
						name='horientacion'
						id='derecha'
						onChange={eventoHorientacion}
						checked={horientacion === "derecha"}
					/>
				</p>
			</div>
		</section>
	);
}

Configuracion.propTypes = {
	estadoConfiguracion: PropTypes.func.isRequired,
};

export { Configuracion };
