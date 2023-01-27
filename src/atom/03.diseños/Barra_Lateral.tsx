import React from 'react'
import { Cabecera_4 } from "@elementos";
import { Lista } from "@componentes";

const Barra_Lateral = () =>{

    return (
        <section className="barra-lateral">
            <Cabecera_4 contenido={"Devchallenges.io"} />
            <Lista />
        </section>
    );
}
export {Barra_Lateral}