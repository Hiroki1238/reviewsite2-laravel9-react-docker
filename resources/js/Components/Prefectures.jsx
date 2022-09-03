import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Prefectures({ prefecture_array }) {
    return (
        <div className="p-6 mt-5 mb-11 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            <h1 className="text-title-purple1 text-4xl mt-5">
                都道府県から探す
            </h1>
            <div className="divide-y space-y-5 divide-gray-400">
                {prefecture_array.map((region, index) => (
                    <div
                        className="py-7 align-center text-center justify-center mx-auto box-sizing"
                        key={`${index}-${region.name}`}
                    >
                        <h1 className="text-3xl mb-3">{region.region}</h1>

                        <div className="w-full ml-0 space-x-3">
                            {region.prefectures.map((prefecture, index) => (
                                <Link
                                key={`${index}-${prefecture.name}`}
                                    className="text-2xl text-link-blue"
                                    href={`/prefectures/${prefecture.id}`}
                                >
                                    {prefecture.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prefectures;
