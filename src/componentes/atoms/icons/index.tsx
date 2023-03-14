import React, { CSSProperties } from 'react';

import images from '../../../images/index';

export type imageProps =
    "usuario" | "banderaCaqueta" | "annadirIcon"
    | "reportIcon" | "selectIcon" | "timeIcon"
    | "actions" | "calendar";

export interface TypeProps {
    width?: string | number | undefined,
    height?: string | number | undefined,
    image: imageProps,
    styles?: CSSProperties,
    onClick?: () => void,
}

//Imprime los iconos
const Icon: React.FC<TypeProps> = (props) => {
    const { width, height, image, onClick, styles } = props;
    return (<img src={images[image]} width={width} height={height} alt={image} style={styles} onClick={onClick} />);
}


Icon.defaultProps = {
    width: '96px',
    height: '96px'
}

export default Icon