import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
function Text_Area({ placeholder = "", css_area = "", mensaje = "", css_descr = "" }) {
	const id = v4();
    console.log(placeholder)
    return (
        <div>
            <label htmlFor={id}>label</label>
            <textarea className={css_area}  name="" id={id} cols="10" rows="4" placeholder={placeholder}>  </textarea>
            <span className={!css_descr ? "" : css_descr}> {mensaje} </span>
        </div>
    );
}

Text_Area.propTypes = {
    placeholder: PropTypes.string,
	css_area: PropTypes.string,
	mensaje: PropTypes.string.isRequired,
	css_descr: PropTypes.string,
};

export { Text_Area };
