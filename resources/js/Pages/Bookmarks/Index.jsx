import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { myBookmarks, auth } = props;

    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         ブックマーク
            //     </h2>
            // }
            >

            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            <h1>ブックマーク</h1>
            <Link onClick={() => window.history.back()}>
                        戻る
                    </Link>
            </div>
            

            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                {myBookmarks.map((review) => (
                    <div key={review.id}>
                        <h2 className="m-2">
                            <Link className="text-link-blue" href={`/reviews/${review.id}`}>
                                {review.title}
                            </Link>
                        </h2>
                    </div>
                ))}
                </div>
        </Authenticated>
    );
};

export default Index;
