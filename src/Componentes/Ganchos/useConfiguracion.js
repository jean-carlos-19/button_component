import { useState, useEffect } from "react";
const useConfiguracion = (radio_horientacion, radio_shadow) => {
	const [horientacion, establecerHorientacion] = useState(undefined);
	const [shadow, establecerShadow] = useState(undefined);
	useEffect(() => {
		horientacion === undefined && shadow === undefined ? establecerEstados("fila", true) : enviarDatos();
	}, [horientacion, shadow]);

	const establecerEstados = (direccion, degradado) => {
		establecerHorientacion(direccion);
		establecerShadow(degradado);
	};
	const enviarDatos = () => {
		console.log("datos enviados");
	};
	const eventoHorientacion = () => {
		const valor = radio_horientacion.current.value;
		if (valor === "derecha") establecerHorientacion("contrario");
		if (valor === "izquierda") establecerHorientacion("fila");
		console.log(valor);
	};
	const eventoShadow = () => {
		const valor = radio_shadow.current.value;
		if (valor === "habilitado") establecerShadow(true);
		if (valor === "desabilitado") establecerShadow(!shadow);
		console.log(valor);
	};
	return { eventoHorientacion, eventoShadow };
};
export { useConfiguracion };
