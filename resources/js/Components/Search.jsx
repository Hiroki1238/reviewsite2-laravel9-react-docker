import React,{useState} from "react";
import { Inertia } from "@inertiajs/inertia";

const Search = (props) => {
    const [word, setWord] = useState("");
    const [capacity, setCapacity] = useState(null);

    const handleSearchWord = (e) => {
        e.preventDefault();
        console.log(capacity);
        Inertia.get(`/search/word`,{word: word, capacity: capacity}); //"/result"というページに値を送っている
    };

    return (
        <div>
            <div className="p-6 mt-8 mb-3 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <form onSubmit={handleSearchWord}>
                    <h1 className="mt-3 mb-3 text-title-purple1 text-3xl">
                        キーワードから探す
                    </h1>
                    <input
                        className="rounded-lg"
                        type="text"
                        placeholder="キーワード検索"
                        onChange={(e) => setWord(e.target.value)}
                    ></input>

                    <h1 className="mt-7 mb-3 text-title-purple1 text-3xl">
                        規模から探す
                    </h1>
                    <select className="rounded-xl" onChange={(e) => setCapacity(e.target.value)}>
                        <option>-</option>
                        <option value="2000">1000-2000人</option>
                        <option value="3000">2000-3000人</option>
                        <option value="4000">3000-4000人</option>
                        <option value="5000">4000-5000人</option>
                        <option value="6000">5000-6000人</option>
                        <option value="7000">6000-7000人</option>
                        <option value="8000">7000-8000人</option>
                        <option value="9000">8000-9000人</option>
                        <option value="10000">9000-10000人</option>
                        <option value="15000">10000-15000人</option>
                        <option value="20000">15000-20000人</option>
                        <option value="25000">20000-25000人</option>
                        <option value="30000">25000-30000人</option>
                        <option value="30001">30000人以上</option>
                    </select>
                    <br />
                    <button
                        type="submit"
                        className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md"
                    >
                        検索
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;
