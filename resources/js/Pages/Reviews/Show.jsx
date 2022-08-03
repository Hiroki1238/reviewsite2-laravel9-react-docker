import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

// このファイルは各会場ごとのレビューを表示するためのjsx

const Index = (props) => {
  const { review, images } = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

{/* レビューのタイトルをクリックして出てくる各レビューの詳細画面 */}

      <div className="p-12"> 
        <h1>{review.venue_id}のレビュー</h1>

        <div id="contents">
          <div key={review.id}>
            <h2>タイトル : {review.title}</h2>
            <h2>レビュー : {review.body}</h2>
            <h2>座席 : {review.seat}</h2>
            <h2>10段階評価1 : {review.star1}</h2>
            <h2>10段階評価2 : {review.star2}</h2>
            <h2>10段階評価3 : {review.star3}</h2>
            <h2>訪問日 : {review.visited_at}</h2>
          </div>
          </div>
          
          if(images != null){
          {images.map((image) => (
           <img src="image.image_path"></img>
          ))}
          }

      </div>

    </Authenticated>
  );
}

export default Index;