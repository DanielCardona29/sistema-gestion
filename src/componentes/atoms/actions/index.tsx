import { useState } from 'react';
import Icon from '../icons';
import './styles.scss';

const Actions = () => {
    const [show, setShow] = useState<boolean>(false);
    const [timer, setTimer] = useState<any>();

    const onMouseOut = () => {
       let timeCounter = setTimeout(() => {
            setShow(false)
        }, 1000);
        setTimer(timeCounter);
    }

    const onMouseOver = () => {
        clearTimeout(timer);
    }
    
    return (
        <div onBlur={() => setShow(false)} className={'wrapper'}>
            <div className={show ? 'wrapper-actions show' : 'wrapper-actions'} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
                Daniel Cardona
            </div>
            <Icon image='actions' width={20} height={20} onClick={() => setShow(true)} />
        </div>
    )
}

export default Actions;