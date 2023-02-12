import React, { CSSProperties } from 'react';

//Estilos
import './styles.scss';

interface TypeProps{
    type?: 'text' | 'email' | 'password' | 'search';
    value?: string;
    placeholder?:  string;
    styles?: CSSProperties;
    onChange?: () => any,
    otherProps?: object
}

//Imprime los iconos
const Input: React.FC<TypeProps> = (props)=> {
    const { type, styles, placeholder, onChange, otherProps, value} = props;

    return (<input type={type} style={styles} className={'input'} placeholder={placeholder} onChange={onChange} value={value} {...otherProps}  />);
}


Input.defaultProps={
    type: 'text',
    placeholder: 'Usuario',
    onChange: () => {},
    value:''
}

export default Input