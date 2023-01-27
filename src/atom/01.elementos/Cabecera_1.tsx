import React from "react";

type Cabecera_1_args = {
    contenido:string
}
const Cabecera_1 = ({contenido}:Cabecera_1_args) => {

    return (
        <h1>
            {contenido}
        </h1>
    );
}

export {
    Cabecera_1
}