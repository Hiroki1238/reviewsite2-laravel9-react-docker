import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Like from "@/Components/Like";

const Index = (props) => {
    const { myVenues, auth, announcements } = props;

    return (
        <Authenticated
            auth={props.auth}
            announcements={announcements}
        >

            <div className="py-2 px-3 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-2xl border border-gray-300 text-center w-5/7">
            <div className="flex justify-left">
                    <Link
                        className="text-gray-400 text-xl no-underline"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>
                </div>
                
                <h2 className="text-title-purple1 text-3xl mb-5">お気に入りの会場</h2>
                
                <Like myVenues={myVenues}/>

            </div>
        </Authenticated>
    );
};

export default Index;
