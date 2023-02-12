import Icon from './componentes/atoms/icons';
import Input from './componentes/atoms/input';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <h1>SISTEMA DE GESTION DE EQUIPOS DE COMPUTO</h1>
      <Icon image={'usuario'} />

      <div className="infowraper">
        <Input type={'text'} placeholder={'Usuario'} />

        <Input type={'password'} placeholder={'Contraseña'} />
      </div>


    </div>
  );
}

export default App;
