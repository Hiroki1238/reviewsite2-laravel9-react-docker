import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Bookmark from "@/Components/Bookmark";

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

           
            <div className="py-2 px-3 mt-7 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            <div className="flex justify-left">
                    <Link
                        className="text-gray-400 text-xl no-underline"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>
                </div>
            <Bookmark myBookmarks={myBookmarks}/>
                </div>
        </Authenticated>
    );
};

export default Index;
