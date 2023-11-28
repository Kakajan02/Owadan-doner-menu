import Content from "./Content";
import Contact from "./Contact";
import css from "./css.module.css";

function Welcome() {
    return (
        <div className={css["w-wrapper"]}>
            <Content />
            <Contact />
        </div>
    );
}

export default Welcome;
