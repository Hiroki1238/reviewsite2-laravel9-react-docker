import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

//レビュー一覧で選択したレビューの詳細画面
const Show = (props) => {
    const { review } = props; 
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
            
            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h1 className="text-purple-800">{ review.title }</h1>
                
                <div>
                    <h3>本文</h3>
                    <p>{ review.body }</p>
                    <h3>座席</h3>
                    <p>{ review.seat }</p>
                    <h3>10段階評価1</h3>
                    <p>{ review.star1 }</p>
                    <h3>10段階評価2</h3>
                    <p>{ review.star2 }</p>
                    <h3>10段階評価3</h3>
                    <p>{ review.star3 }</p>
                    <h3>訪問日</h3>
                    <p>{ review.visited_at }</p>

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
