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
                    <p className="text-3xl top-30 text-center">raionについて</p>
                    <img src={"/discription2.jpg"} className="w-full"/>
                    </div>
            </Common>
        </div>
    );
};

export default Description;
