import { Constants } from "../../common";
import { Link } from "react-router-dom";
import css from "./css.module.css";

export default function Card({ id, image, name, lang }) {
    return (
        <Link to={Constants._items + "#" + id} className={css["card"]}>
            {Constants.hasCategoryImage && (
                <img draggable="false" src={image} alt={id} />
            )}
            <div className={Constants.hasCategoryImage ? css["overlay"] : ""}>
                <h5>{name[lang]}</h5>
            </div>
        </Link>
    );
}
