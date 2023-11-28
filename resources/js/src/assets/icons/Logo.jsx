import { useAppContext } from "../../Context";
import img_1 from "../images/group_2.png";
import img_2 from "../images/group_1.png";

// export default function Logo({ width = "255px", height = "289px" }) {
//     return <img src={img_1} style={{ width: { width }, height: { height } }} />;
// }

export default function Logo({ width = "197px", height = "197px" }) {
    const { state } = useAppContext();
    return (
        <img
            src={state.mode == "dark" ? img_2 : img_1}
            style={{ width, height }}
        />
    );
}
