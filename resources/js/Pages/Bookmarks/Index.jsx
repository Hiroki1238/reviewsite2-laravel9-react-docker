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

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
            <h1>ここにブックマークを表示</h1>
            </div>

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h2 className="text-purple-800">ブックマーク</h2>
                {myBookmarks.map((review) => (
                    <div key={review.id}>
                        <h2>
                            <Link href={`/reviews/${review.id}`}>
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
