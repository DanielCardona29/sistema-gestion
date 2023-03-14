import React, { CSSProperties, useState } from 'react';
import Icon from '../icons';

//Estilos
import './styles.scss';

interface TypeProps {
    id?: string;
    type?: 'text' | 'email' | 'password' | 'search' | 'date';
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

    const [date, setDate] = useState('');

    const onDatePress = () => {
        (document.querySelector('#' + id) as any)?.showPicker();
    }

    const onDateChange = (e: any) => {
        setDate(e.target.value);
        onChange && onChange(e);
    }

    switch (type) {

        case 'date':
            let move = 356;
            if (styles?.width) {
                const width = styles.width as number || 0;
                move = width + (width * 0.16);
            }
            return (
                <div className='date-wrapper' style={{ width: move }}>

                    <input type={type} style={styles} className={'input date'} placeholder={placeholder} onChange={onDateChange} id={id} autoComplete={autocomplete} {...otherProps} />

                    <input type={'text'} style={{ ...styles }} readOnly className={'input date-over'} onClick={onDatePress} placeholder={placeholder} value={date} autoComplete={autocomplete} {...otherProps} />

                    <Icon image='calendar' width={35} height={35} styles={{
                        position: 'relative',
                        right: '45px'
                    }} />
                </div>
            );

        default:
            return <input type={type} style={styles} className={'input'} placeholder={placeholder} onChange={onChange} value={value} id={id} autoComplete={autocomplete} {...otherProps} />

    }

}


Input.defaultProps = {
    id: 'default',
    type: 'text',
    placeholder: 'Usuario',
    onChange: () => { },
    value: '',
    styles: { width: 356 }
}

export default Input