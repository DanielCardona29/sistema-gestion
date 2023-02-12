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
    otherProps?: object,
    autocomplete?: 'current-password' | 'username'
}

//Imprime los iconos
const Input: React.FC<TypeProps> = (props) => {
    const { type, styles, placeholder, onChange, otherProps, value, id, autocomplete } = props;

    return (<input type={type} style={styles} className={'input'} placeholder={placeholder} onChange={onChange} value={value} id={id} autoComplete={autocomplete} {...otherProps} />);
}


Input.defaultProps = {
    id: 'default',
    type: 'text',
    placeholder: 'Usuario',
    onChange: () => { },
    value: ''
}

export default Input