const info_boton = {
	normal: {
		default: {
			css: "normal",
			descripcion: "<Button />",
			nombre: "default",
		},
		outline: {
			css: "outline",
			descripcion: "<Button variant=”outline” />",
			nombre: "default",
		},
		text: {
			css: "text",
			descripcion: "<Button variant=”text” />",
			nombre: "default",
		},
	},
	focus: {
		default: {
			css: "normal focus",
			descripcion: "&:hover, &:focus",
			nombre: "default",
		},
		outline: {
			css: "outline focus",
			descripcion: "&:hover, &:focus",
			nombre: "default",
		},
		text: {
			css: "text focus",
			descripcion: "&:hover, &:focus",
			nombre: "default",
		},
	},
	shadow: {
		default: {
			css: "shadow",
			descripcion: "<Button disableShadow />",
			nombre: "default",
		},
	},
	desabilitado: {
		default: {
			css: "default",
			descripcion: "<Button disableShadow />",
			nombre: "default",
		},
		inactivo: {
			css: "desabilitado",
			descripcion: "<Button variant=”text” disabled />",
			nombre: "default",
		},
	},
	icono: {
		start: {
			css: "start shadow",
			descripcion: "<Button startIcon=”local_grocery_store” />",
			nombre: "default",
		},
		final: {
			css: "end shadow",
			descripcion: "<Button endIcon=”local_grocery_store” />",
			nombre: "default",
		},
	},
	dimensiones: {
		normal: {
			css: "base shadow",
			descripcion: "<Button size=”sm” />",
			nombre: "default",
		},
		medium: {
			css: "medium shadow",
			descripcion: "<Button size=”md” />",
			nombre: "default",
		},
		largo: {
			css: "largo shadow",
			descripcion: "<Button size=”lg” />",
			nombre: "default",
		},
	},
	color: {
		default: {
			css: "default",
			descripcion: " <Button color=”default” />",
			nombre: "default",
		},
		primary: {
			css: "shadow",
			descripcion: "<Button color=”primary” />",
			nombre: "default",
		},
		second: {
			css: "second",
			descripcion: "<Button color=”secondary” />",
			nombre: "default",
		},
		danger: {
			css: "danger",
			descripcion: "<Button color=”danger” />",
			nombre: "default",
		},
	},
	color_hover: {
		default: {
			css: "normal focus",
			descripcion: "&:hover, &:focus",
			nombre: "default",
		},
		primary: {
			css: "shadow primary focus",
			descripcion: "",
			nombre: "default",
		},
		second: {
			css: "second focus",
			descripcion: "",
			nombre: "default",
		},
		danger: {
			css: "danger focus",
			descripcion: "",
			nombre: "default",
		},
	},
};
export { info_boton };
