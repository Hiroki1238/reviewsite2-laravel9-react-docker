import React from "react";
import Common from "@/Layouts/Common";
import { Link } from "@inertiajs/inertia-react";
import ReviewList2 from "@/Components/ReviewList2";

const Description = (props) => {
    const { auth } = props;

    return (
        <div>
            <Common>
                <div>
                {/* bg-[url('/discription2.jpg')] */}
                  <div>
                    <div className="absolute z-10 right-10 left-10 top-40 text-center">
                        <p className="text-5xl">raionについて</p>
                        <p className="mt-11 text-4xl">raionとは、ライブ会場や座席にレビューがつけられるアプリです。</p>
                        </div>
                    <img src={"/description4.jpg"} className="w-full relative"/>
                    </div>
                </div>
            </Common>
        </div>
    );
};

export default Description;