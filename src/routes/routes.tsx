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
        path: "/crear/area",
        name: "Area Crete",
        component: AreasCreate,
        params: "",
        id: "area-create"
    },
    {
        path: "/perifericos/gestionar",
        name: "Gestionar perifericos",
        component: AreasCreate,
        params: "",
        id: "gestionar-perifericos"
    },
    {
        path: "/historial/movimientos",
        name: "Historial de Movimientos",
        component: AreasCreate,
        params: "",
        id: "historial-de-movimientos"
    },
    {
        path: "/canal/reportes",
        name: "Canal de reportes",
        component: AreasCreate,
        params: "",
        id: "canal-de-reportes"
    }
]