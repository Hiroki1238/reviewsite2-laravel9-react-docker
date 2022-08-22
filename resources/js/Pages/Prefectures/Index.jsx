import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Prefectures from "@/Components/Prefectures";
import Guest from "@/Layouts/Guest";

const Index = (props) => {
    const { auth, prefecture_array } = props;
    console.log(props);

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={props.auth}>
                    <Prefectures prefecture_array={prefecture_array} />

                    <Link onClick={() => window.history.back()}>戻る</Link>
                </Authenticated>
            ) : (
                <Guest>
                    <Prefectures prefecture_array={prefecture_array} />

                    <Link onClick={() => window.history.back()}>戻る</Link>
                </Guest>
            )}
        </div>
    );
};

export default Index;
