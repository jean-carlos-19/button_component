import React from 'react';

type Cabecera_4_args = {
    contenido:string
}

const Cabecera_4 = ({contenido}:Cabecera_4_args) => {

    return (
        <h4>
            {contenido}
        </h4>
    );
}

export {
    Cabecera_4
}