import { useState, useEffect } from "react";
const useConfiguracion = (estadoConfiguracion = f => f) => {
	const [horientacion, establecerHorientacion] = useState(undefined);
	const [shadow, establecerShadow] = useState(undefined);
	useEffect(() => {
		horientacion === undefined && shadow === undefined ? establecerEstados("izquierda", "habilitado") : enviarDatos();
	}, [horientacion, shadow]);

	const establecerEstados = (direccion, degradado) => {
		establecerHorientacion(direccion);
		establecerShadow(degradado);
	};
	const enviarDatos = () => {
		estadoConfiguracion({ horientacion: horientacion, shadow: shadow });
	};
	const eventoHorientacion = evento => {
		const valor = evento.currentTarget.value;
		if (valor === "derecha") establecerHorientacion("derecha");
		if (valor === "izquierda") establecerHorientacion("izquierda");
	};
	const eventoShadow = evento => {
		const valor = evento.currentTarget.value;
		if (valor === "habilitado") establecerShadow("habilitado");
		if (valor === "desabilitado") establecerShadow("desabilitado");
	};
	return { horientacion, shadow, eventoHorientacion, eventoShadow };
};
export { useConfiguracion };
