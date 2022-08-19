import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Like from "@/Components/Like";

const Index = (props) => {
    const { myVenues, auth } = props;

    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         お気に入り
            //     </h2>
            // }
        >

            <div className="py-2 px-3 mt-7 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            <div className="flex justify-left">
                    <Link
                        className="text-gray-400 text-lg no-underline"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>
                </div>
                
                <h2 className="text-title-purple1 text-3xl">お気に入り</h2>{" "}
                {/*いいね一覧を表示したい*/}
                
                <Like myVenues={myVenues}/>

            </div>
        </Authenticated>
    );
};

export default Index;
