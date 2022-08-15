import React from "react";
import {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import Prefectures from "@/Components/Prefectures";
import Search from "@/Components/Search";

const Index = (props) => {
    const { venues, prefecture, prefecture_array } = props;
    // const { data, setData, post } = useForm({
    //     word: "",
    //     capacity: "",
    // })


    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         検索
            //     </h2>
            // }
        >

        <Search />

            <Prefectures prefecture_array={prefecture_array} />

            <Link onClick={() => window.history.back()}>
                        戻る
                    </Link>
        </Authenticated>
    );
};

export default Index;
