import React from "react";
import "./Estilos/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Contenedor } from "./Contenedor";
function App() {
	return (
		<Router>
			<Contenedor />
		</Router>
	);
}

export default App;
