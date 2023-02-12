import React, { useState } from 'react'
import Button from '../../atoms/button'
import Icon from '../../atoms/icons'
import Input from '../../atoms/input'


import './styles.scss';

interface TypeProps {

}


interface StateProps {
    user?: string,
    password?: string
}


const Login: React.FC<TypeProps> = () => {
    const [state, setState] = useState<StateProps>({});


    //dejo el evento  en any porque no existe el EventTarget.id
    const onChange = (event: any) => {
        const { target: { id, value } } = event;
        setState({
            ...state,
            [id]: value
        });
    }


    return (
        <form className="login-wrapper">
            <Icon image={'usuario'} />
            <div className="inputs-wrapper">
                <Input type={'text'} placeholder={'Usuario'} id={'user'} onChange={onChange} value={state.user} autocomplete={'username'} />
                <Input type={'password'} placeholder={'Contrasesña'} id={'password'} onChange={onChange} value={state.password} autocomplete={'current-password'} />
            </div>
            <div className="button-wrapper">
                <Button>Iniciar  Session</Button>
            </div>
        </form>
    )
}

export default Login