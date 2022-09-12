import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Prefectures from "@/Components/Prefectures";
import Guest from "@/Layouts/Guest";

const Index = (props) => {
    const { auth, prefecture_array, announcements } = props;
    console.log(props);

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={props.auth} announcements={announcements}>
                    <Prefectures prefecture_array={prefecture_array} />

                    <Link onClick={() => window.history.back()}>戻る</Link>
                </Authenticated>
            ) : (
                <Guest announcements={announcements}>
                    <Prefectures prefecture_array={prefecture_array} announcements = {announcements} />

                    <Link onClick={() => window.history.back()}>戻る</Link>
                </Guest>
            )}
        </div>
    );
};

export default Index;
