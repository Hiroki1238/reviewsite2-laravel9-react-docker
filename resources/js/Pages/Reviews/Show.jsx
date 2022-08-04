import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

//レビュー一覧で選択したレビューの詳細画面
const Show = (props) => {
    const { review } = props; 
    console.log(review);
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-12">
                <h1>{ review.title }</h1>
                
                <div>
                    <h3>本文</h3>
                    <p>{ review.body }</p>
                </div>

                <div>
                <Link href={"/reviews/" + review.id + "/edit"}>編集</Link>
                </div>
                
                <div>
                    <Link href={`/prefectures/venues/${review.venue_id}`}>戻る</Link>
                </div>
            </div>
        </Authenticated>
        );
}

export default Show;
