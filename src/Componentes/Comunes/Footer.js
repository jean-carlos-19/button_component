import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Footer({ url_creador = "", nombre_creador = "", url_devchallenges = "", nombre_devchallenges }) {
	return (
		<footer className='pie_pagina'>
			<span>
				create by
				<Link to={{ pathname: { url_creador } }} target='_blank'>
					{nombre_creador}
				</Link>
				<Link to={{ pathname: { url_devchallenges } }} target='_blank'>
					{nombre_devchallenges}
				</Link>
			</span>
		</footer>
	);
}

Footer.propTypes = {
	url_creador: PropTypes.string.isRequired,
	url_devchallenges: PropTypes.string.isRequired,
	nombre_creador: PropTypes.string.isRequired,
	nombre_devchallenges: PropTypes.string.isRequired,
};

export { Footer };
