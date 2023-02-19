import React from 'react';
import './styles.scss'
import Icon, { imageProps } from "../../atoms/icons";
import { Link } from "react-router-dom";


type link = "/" | "area/create"
interface TypeProps {
    icon: imageProps,
    placeholder?: string,
    link: link,
}

const MenuLink: React.FC<TypeProps> = (props) => {
    const { link, icon, placeholder } = props;

    const placeHolder = () => {
        return <div className="link-wrapper">
            <Icon image={icon} width={19} height={19} />
            <span>{placeholder}</span>
        </div>
    }

    return <Link to={link}>{placeHolder()}</Link>
}


MenuLink.defaultProps = {

}


export default MenuLink;