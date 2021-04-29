import React from "react";
//import PropTypes from "prop-types";
import { Rutas } from "./Rutas";
import { urls } from "./Constantes";
import { Barra_Navegacion_Lateral, Encabezado } from "./Componentes/Diseño";
import { Footer } from "./Componentes/Comunes";
function Contenedor() {
	return (
		<>
			<header className='encabezado'>
				<Encabezado titulo={"Devchallenges.io"} />
				<Barra_Navegacion_Lateral items={urls} />
			</header>
			<div className='contenido'>
				<Rutas />
				<Footer
					url_creador={"https://devchallenges.io/portfolio/jean-carlos-19"}
					nombre_creador={"@piguavejc"}
					url_devchallenges={"https://devchallenges.io/"}
					nombre_devchallenges={"devchallenges.io"}
				/>
			</div>
		</>
	);
}

//Contenedor.propTypes = {};

export { Contenedor };
