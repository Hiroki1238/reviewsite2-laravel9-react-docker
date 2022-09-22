import React from "react";
import Common from "@/Layouts/Common";
import { Link } from "@inertiajs/inertia-react";
import ReviewList2 from "@/Components/ReviewList2";
import Announcement from "@/Components/Announcement";

const Index = (props) => {
    const { auth, announcements } = props;

    return (
        <div>
            <Common>
                  <div>
                    <p className="text-3xl top-30 text-center">raionについて</p>
                    {/* <img src={"/discription2.jpg"} className="w-full"/> */}
                    </div>
            </Common>
        </div>
    );
};

export default Index;
