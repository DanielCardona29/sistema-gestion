import React from 'react';
import './styles.scss'

interface TypeProps {
    children?: any;
    type?: 'default';
    disabled?: Boolean;
    onClick?: () => void;
}

const Button: React.FC<TypeProps> = (props) => {
    const { children, type, disabled, onClick } = props;
    return (<button type='button' className={'button ' + type} disabled={disabled && true} onClick={onClick}>{children}</button>);
}


Button.defaultProps = {
    children: 'Button',
    type: 'default',
    disabled: false,
    onClick: () => { }
}


export default Button;