import "../../assets/glide/glide.core.min.css";
import "../../assets/glide/glide.theme.min.css";
import Glide, {
    Autoplay,
    Controls,
    Swipe,
} from "../../assets/glide/glide.modular.esm";
import { memo, useEffect } from "react";

function _Swiper({ items = [] }) {
    useEffect(function () {
        new Glide(".glide", {
            autoplay: 6000
        }).mount({ Autoplay, Controls, Swipe });
    }, []);
    return (
        <div className="glide">
            <div className="glide__track " data-glide-el="track">
                <ul className="glide__slides">
                    {items.map((img) => (
                        <li className="glide__slide" key={img}>
                            <img draggable="false" src={img} alt="SS" />
                        </li>
                    ))}
                </ul>
            </div>
            {items.length > 1 && (
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    {items.map((_, index) => (
                        <button
                            key={index + "_glide-bullet"}
                            className="glide__bullet"
                            data-glide-dir={"=" + index}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
}
export const Swiper = memo(_Swiper);
