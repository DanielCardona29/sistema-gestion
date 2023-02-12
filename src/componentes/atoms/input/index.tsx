import React, { CSSProperties } from 'react';

//Estilos
import './styles.scss';

interface TypeProps {
    id?: string;
    type?: 'text' | 'email' | 'password' | 'search';
    value?: string;
    placeholder?: string;
    styles?: CSSProperties;
    onChange?: (e: any) => any,
    otherProps?: object
}

//Imprime los iconos
const Input: React.FC<TypeProps> = (props) => {
    const { type, styles, placeholder, onChange, otherProps, value, id } = props;

    return (<input type={type} style={styles} className={'input'} placeholder={placeholder} onChange={onChange} value={value} id={id} {...otherProps} />);
}


Input.defaultProps = {
    id: 'default',
    type: 'text',
    placeholder: 'Usuario',
    onChange: () => { },
    value: ''
}

export default Input