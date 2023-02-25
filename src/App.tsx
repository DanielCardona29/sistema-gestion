import './styles/app.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/auth';
import { RoutesList } from './routes/routes';



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
        {RoutesList.map((route, index) => <Route element={<route.component />} path={route.path} id={route.id} key={index} />)}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
