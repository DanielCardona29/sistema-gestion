import LoginPage from './componentes/pages/Login';
import Home from './componentes/pages/home/home';
import { AuthProvider } from './contexts/auth';
import './styles/app.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AreasCreate from './componentes/pages/areasCreate';

export const pathList = {
  Login: "/",
  areaCreate: "area/create"

}

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
