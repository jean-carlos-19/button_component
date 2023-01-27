
import React from 'react';

type item_args = {
    ruta:string,
    nombre:string
}

const Item = ({ruta, nombre}:item_args) => { 

    return (
        <li>
            { nombre }
        </li>
    );
}
export {
    Item
};