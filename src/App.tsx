import Home from './componentes/pages/home/home';
import { AuthProvider } from './contexts/auth';
import './styles/app.scss';

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
