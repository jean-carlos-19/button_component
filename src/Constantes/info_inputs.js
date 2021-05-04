const info_inputs = {
	normal: {
		default: {
			css: "normal",
			descripcion: "<Input />",
			placeholder: "Placeholder",
			mensaje: "",
		},
		hover: {
			css: "hover",
			descripcion: "&:hover",
			placeholder: "Placeholder",
			mensaje: "",
		},
		focus: {
			css: "focus",
			descripcion: "&:focus",
			placeholder: "Placeholder",
			mensaje: "",
		},
	},
	error: {
		default: {
			css: "error",
			descripcion: "<Input error />",
			placeholder: "Placeholder",
			mensaje: "",
		},
		hover: {
			css: "hover",
			descripcion: "&:hover",
			placeholder: "Placeholder",
			mensaje: "",
		},
		focus: {
			css: "error",
			descripcion: "&:focus",
			placeholder: "Placeholder",
			mensaje: "",
		},
	},
	desabilitado: {
		default: {
			css: "default",
			descripcion: "<Input disabled />",
			placeholder: "Placeholder",
			mensaje: "",
		},
	},
	helpertext: {
		default: {
			css: "",
			descripcion: "<Input helperText=”Some interesting text” />",
			placeholder: "Placeholder",
			mensaje: "Some interesting text",
			css_descr: "",
		},
		error: {
			css: "error",
			descripcion: "<Input helperText=”Some interesting text” />",
			placeholder: "Placeholder",
			mensaje: "Some interesting text",
			css_descr: "text_error",
		},
	},
	icono: {
		izquierdo: {
			css: "input izquierda",
			descripcion: "<Input startIcon />",
			placeholder: "Placeholder",
			mensaje: "",
			nombre_span: "call",
		},
		derecha: {
			css: "input derecha",
			descripcion: "<Input endIcon />",
			placeholder: "Placeholder",
			mensaje: "",
			nombre_span: "lock",
		},
	},
	text: {
		default: {
			css: "",
			descripcion: "<Input value=”text” />",
			placeholder: "Text",
			mensaje: "",
		},
	},
	dimensiones: {
		normal: {
			css: "",
			descripcion: "<Input value=”sm” />",
			placeholder: "Placeholder",
			mensaje: "",
		},
		mediano: {
			css: "",
			descripcion: "<Input value=”md” />",
			placeholder: "Placeholder",
			mensaje: "",
		},
	},
	fullWidth: {
		default: {
			css: "",
			descripcion: "<Input fullWidth />",
			placeholder: "Text",
			mensaje: "",
		},
	},
	area:{
		default: {
			css: "",
			descripcion: "<Input multiline=”4” />",
			placeholder: "Placeholder",
			mensaje: "",
		},
	}
};
export { info_inputs };
