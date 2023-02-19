import AreasCreate from '../componentes/pages/areasCreate';
import LoginPage from '../componentes/pages/Login';

export const RoutesList = [
    {
        path: "/",
        name: "Login",
        component: LoginPage,
        params: "",
        id: "login"
    },
    {
        path: "area/create",
        name: "Area Crete",
        component: AreasCreate,
        params: "",
        id: "area-create"
    }

]