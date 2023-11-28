import { Constants } from "../../common";
import CardWithImage from "../../components/ItemCardWithImage";
import CardWithoutImage from "../../components/ItemCardWithoutImage";

import Marquee from "../../components/Marquee";
import css from "./css.module.css";

function Card(props) {
    if (Constants.hasFoodImage) {
        return <CardWithImage {...props} />;
    }
    return <CardWithoutImage {...props} />;
}

export default function Section({ id, index, name, lang, foods }) {
    return (
        <section id={id} className={css["sections"]}>
            {index > 0 && (
                <Marquee
                    bg="var(--primary)"
                    color="var(--text-color)"
                    label={name[lang]}
                    defaultStyle={{ margin: "40px 0" }}
                />
            )}
            <div
                className={
                    Constants.hasFoodImage ? css["item-list"] : css["items"]
                }
            >
                {Array.isArray(foods)
                    ? foods.map((food) => (
                          <Card
                              key={"food_card_" + food.id}
                              {...food}
                              lang={lang}
                          />
                      ))
                    : null}
            </div>
        </section>
    );
}
