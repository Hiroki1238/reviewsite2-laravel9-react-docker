import React from "react";
import {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { venues, prefecture, prefecture_array } = props;
    console.log(props);
    const [word, setWord] = useState("");

    const handleSearch = (e) => {
        console.log("ねこ",e.target.value);
        e.preventDefault();
        Inertia.post("/result", word); //"/result"というページに値を送っている
    };

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    検索
                </h2>
            }
        >
            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
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

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <form onSubmit={handleSearch}>
                    <h1>キーワードから探す</h1>
                    <input type="text" name="word" placeholder="キーワード検索" onChange={(e) => setWord("word", e.target.value)}
                    ></input>
                    <button
                        type="submit"
                        className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md"
                    >
                        検索
                    </button>
                </form>
            </div>

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h1>規模から探す</h1>
                <select>
                    <option value="10">1000-2000人</option>
                    <option value="20">2000-3000人</option>
                    <option value="30">3000-4000人</option>
                    <option value="40">4000-5000人</option>
                    <option value="50">5000-6000人</option>
                    <option value="60">6000-7000人</option>
                    <option value="70">7000-8000人</option>
                    <option value="80">8000-9000人</option>
                    <option value="90">9000-10000人</option>
                    <option value="90">10000-15000人</option>
                    <option value="90">15000-20000人</option>
                    <option value="90">20000人以上</option>
                </select>
                <button
                    type="submit"
                    className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md"
                >
                    検索
                </button>
            </div>
        </Authenticated>
    );
};

export default Index;
