import LoginPage from './componentes/pages/Login';
import './styles/app.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AreasCreate from './componentes/pages/areasCreate';

export const pathList = {
  Login: "/",
  areaCreate: "area/create"

}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Ruta inicial */}
          <Route path={pathList.Login} element={<LoginPage />} />
          {/* Ruta de creacion de areas */}
          <Route path={pathList.areaCreate} element={<AreasCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
