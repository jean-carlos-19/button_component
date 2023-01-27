import React from 'react';
import { Barra_Lateral } from "@disenos";
import { Cabecera_1 } from "@elementos";

const Entrada = () => {

    return (
        <div className = "button">
            <Barra_Lateral />
            <section>
                <Cabecera_1 contenido='devchallenges.io' />
            </section>
        </div>
    );
}
export {
    Entrada
};