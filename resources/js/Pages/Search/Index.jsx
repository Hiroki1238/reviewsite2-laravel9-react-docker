import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { venues, prefecture, prefecture_array } = props;
    console.log(props);

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }
        >
            <div className="p-12">
                <h1>都道府県から探す</h1>

                {prefecture_array.map((region) => (
                    <div key={region.id}>
                        <h2>{region.region}</h2>
                        {region.prefectures.map((prefecture) => (
                            <p>
                                <Link href={`/prefectures/${prefecture.id}`}>
                                    {prefecture.name}
                                </Link>
                            </p>
                        ))}
                    </div>
                ))}
            </div>

            <div className="p-12">
                <h1>キーワードから探す</h1>
                <input type="text" name="word" placeholder="キーワード検索"></input>
                <button type="submit">検索</button>
            </div>

            <div className="p-12">
                <h1>規模から探す</h1>
                <button type="submit">検索</button>
            </div>
        </Authenticated>
    );
};

export default Index;
