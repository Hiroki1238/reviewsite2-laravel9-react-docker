import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/Authenticated";

const Edit = (props) => {
    const {review} = props;
    const {data, setData, put} = useForm({
        title: review.title,
        body: review.body,
        seat: review.seat,
        user_id: review.user_id,
        star1: review.star1,
        star2: review.star2,
        star3: review.star3,
        venue_id: review.venue_id,
        visited_at:review.visited_at,

    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/reviews/${review.id}`);
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>
            
            <div className="p-12">
                
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>タイトル</h2>
                        <input type="text" value={data.title} onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>                    
                    
                    <div>
                        <h2>レビュー</h2>
                        <textarea value={data.body} onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">送信</button>
                </form>
                
                <div>
                <Link href={"/review/" + review.id}>戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Edit;