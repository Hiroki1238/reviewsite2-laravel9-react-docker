import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/Authenticated";

const Edit = (props) => {
    const { review } = props;
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
        put(`/reviews/update/${review.id}/`);
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    編集
                </h2>
            }>
            
            <div className="p-1.5 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center"> {/*なぜか適用されない*/}
                
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>タイトル</h2>
                        <input type="text" value={data.title} onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>                    
                    
                    <div>
                        <h2>レビュー内容</h2>
                        <textarea value={data.body} onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>
                    
                    <div>
                        <h2>座席</h2>
                        <input type="text" value={data.seat} onChange={(e) => setData("seat", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>10段階評価1</h2>
                        <input type="number" value={data.star1} onChange={(e) => setData("star1", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>10段階評価2</h2>
                        <input type="number" value={data.star2} onChange={(e) => setData("star2", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>10段階評価3</h2>
                        <input type="number" value={data.star3} onChange={(e) => setData("star3", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>訪問日</h2>
                        <input type="text" value={data.visited_at} onChange={(e) => setData("visited_at", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div> 
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                 <Link href={`/reviews/${review.id}`}>戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;