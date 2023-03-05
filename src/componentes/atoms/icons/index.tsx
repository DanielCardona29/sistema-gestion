import React from 'react';

import images from '../../../images/index';

export type imageProps =
    "usuario" | "banderaCaqueta" | "annadirIcon" | "reportIcon" | "selectIcon" | "timeIcon" | "actions";

export interface TypeProps {
    width?: string | number | undefined,
    height?: string | number | undefined,
    image: imageProps,
    onClick?: () => void,
}

//Imprime los iconos
const Icon: React.FC<TypeProps> = (props) => {
    //las propiedades
    const { width, height, image, onClick } = props;


    return (<img src={images[image]} width={width} height={height} alt={image} onClick={onClick} />);
}


Icon.defaultProps = {
    width: '96px',
    height: '96px'
}

export default Icon