import React from 'react';
import './styles.scss'
import Icon, { imageProps } from "../../atoms/icons";
import { Link } from "react-router-dom";


type link =
    "/" |
    "/crear/area" |
    "/perifericos/gestionar" |
    "/historial/movimientos" |
    "/canal/reportes";

interface TypeProps {
    icon: imageProps,
    placeholder?: string,
    link: link,
}

const MenuLink: React.FC<TypeProps> = (props) => {
    const { link, icon, placeholder } = props;

    const placeHolder = () => {
        return <div className="link-wrapper">
            <Icon image={icon} width={21} height={21} />
            <span>{placeholder}</span>
        </div>
    }

    return <Link to={link} className="link">{placeHolder()}</Link>
}


MenuLink.defaultProps = {

}


export default MenuLink;