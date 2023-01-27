import React from 'react';
import {items} from '@data'
import { Item } from '@elementos'
const Lista = () =>{

    return (
        <ul>
            {
                items.map( (item,i) => {
                    const {ruta,nombre} = item;
                    return <Item ruta = {ruta} nombre = {nombre} key={i} />;
                })
            }
        </ul>
    );
}

export {Lista}