import React from "react";
import {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import Prefectures from "@/Components/Prefectures";

function Search(){
<div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
    <form onSubmit={handleSearchWord}>
        <h1>キーワードから探す</h1>
        <input
            type="text"
            placeholder="キーワード検索"
            onChange={(e) => setWord(e.target.value)}
        ></input>

        <h1>規模から探す</h1>
        <select onChange={(e) => setCapacity(e.target.value)}>
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

        <button
            type="submit"
            className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md"
        >
            検索
        </button>
    </form>
</div>
}

export default Search;
