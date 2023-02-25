import MenuLink from "../../cells/menuLink";
import './styles.scss';


interface TypeProps { }

const LateralMenu: React.FC<TypeProps> = () => {

    return (
        <div className="lateral-menu-wrapper">
            <MenuLink icon="annadirIcon" link="/crear/area" placeholder="Crear nueva area" />
            <MenuLink icon="selectIcon" link="/perifericos/gestionar" placeholder="Gestionar perifericos" />
            <MenuLink icon="timeIcon" link="/historial/movimientos" placeholder="Historial de Movimientos" />
            <MenuLink icon="reportIcon" link="/canal/reportes" placeholder="Canal de reportes" />
        </div>
    )
}


LateralMenu.defaultProps = {

}


export default LateralMenu;