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
              <h2>searchのindex</h2>
                <h1>都道府県から探す</h1>
                {/* リンクを横並びにしたい */}
            <div id="prefectures" style="">
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
            </div>

            <div className="p-12">
                <h1>キーワードから探す</h1>
            <form action="/search/word" method="POST">
                <input type="text" name="word" placeholder="キーワード検索"></input>
                <button type="submit">検索</button>
                </form>
            </div>

            <div className="p-12">
                <h1>規模で検索</h1>
                <form action="/search/capacity" method="POST">
                <input type="text" name="word" placeholder="キーワード検索"></input>
                <button type="submit">検索</button>
                </form>
            </div>

        </Authenticated>
    );
};

export default Index;
