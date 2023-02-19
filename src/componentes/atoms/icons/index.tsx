import React from 'react';

import images from '../../../images/index';

export type imageProps = 'usuario' | 'banderaCaqueta'

export interface TypeProps{
    width?: string | number | undefined,
    height?: string | number | undefined,
    image: imageProps,
}

//Imprime los iconos
const Icon: React.FC<TypeProps> = (props)=> {
    //las propiedades
    const {width, height, image}= props;


    return (<img src={images[image]} width={width} height={height} alt={image} />);
}


Icon.defaultProps={
    width: '96px',
    height: '96px'
}

export default Icon