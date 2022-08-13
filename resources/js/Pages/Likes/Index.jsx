import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

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

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
            <h1>ここにお気に入りを表示</h1>
            </div>

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h2 className="text-purple-800">お気に入り</h2> {/*いいね一覧を表示したい*/}
                {myVenues.map((venue) => (
                    <div key={venue.id}>
                        <h2>
                            <Link href={`/prefectures/venues/${venue.id}`}>
                                {venue.name}
                            </Link>
                        </h2>
                    </div>
                ))}
                </div>
        </Authenticated>
    );
};

export default Index;
