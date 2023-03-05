import './styles/app.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/auth';
import { RoutesList } from './routes/routes';
import LateralMenu from './componentes/organims/lateralMenu';



function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <RoutesWrapper />
      </ContextWrapper>
    </div>
  );
}

//Envuelve  todos los contextos generales necesarios
const ContextWrapper = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

//Envuelve el listado de rutas
const RoutesWrapper = ({ children }: any) => {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesList.map((route, index) => <Route element={GeneralWrapper(route.component)} path={route.path} id={route.id} key={index} />)}
      </Routes>
    </BrowserRouter>
  )
}

//General Wrapper 
const GeneralWrapper = (Component: any) => {
  return (
    <div className="screen-wrapper">
      <div className="menu-wrapper">
        <LateralMenu />
      </div>
      <div className="component-wrapper">
        <Component />
      </div>
    </div>
  )
}

export default App;
