// import { Link } from "react-router-dom";
// import Constants from "../../common/Constants";
import { useAppContext } from "../../Context";
import Navbar from "./Navbar";
import Card from "./Card";
import Call from "../../components/Call";
import { Constants } from "../../common";
import css from "./css.module.css";
import { Fetch } from "../../common";
import { useEffect, useState } from "react";

function Catalog() {
    const { state } = useAppContext();
    const [categories, setCategories] = useState([]);

    // Track whether the component is mounted
    const [isMounted, setIsMounted] = useState(true);

    // Cleanup function
    const cancelFetchIfPending = () => {
        if (Fetch("categories").isPending) {
            Fetch("categories").cancel();
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await Fetch("categories");
            if (Array.isArray(res.data)) {
                setCategories(res.data);
            }
        };

        fetchCategories();

        // Schedule the cleanup function to be called before the component unmounts
        return () => {
            if (isMounted) {
                cancelFetchIfPending();
            }
        };
    }, [isMounted]);

    // Update the `isMounted` state when the component unmounts
    useEffect(() => {
        return () => setIsMounted(false);
    }, []);

    return (
        <>
            <div
                className={css["items"]}
                style={{ marginTop: Constants.hasService ? 142 : 60 }}
            >
                {categories.map((category) => (
                    <Card key={category.id} lang={state.lang} {...category} />
                ))}
            </div>
            <Navbar lang={state.lang} />
            <Call lang={state.lang} />
        </>
    );
}

export default Catalog;