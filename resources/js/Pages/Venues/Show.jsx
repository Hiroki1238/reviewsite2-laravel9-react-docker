import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

// このファイルは会場の情報とこの会場についているレビュー一覧を表示
const Index = (props) => {
  const { reviews, prefecture, venue} = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

      <div className="p-12">
        <h1>{venue.name}のレビュー</h1>
        <h2>収容人数 : {venue.scale_standing}人</h2>
        <h2>所在地 : {venue.address}</h2>
        <h2>ホームページ : <Link href="venue.url">{venue.url}</Link></h2>

        <h2><Link>新規投稿</Link></h2>
        <Link href={`/prefectures/${prefecture.id}`}>戻る</Link>

        {reviews.map((review) => (
          <div key={review.id}>
            <h2>
            <Link href={`/reviews/${review.id}`}>{review.title}</Link>
            </h2>
          </div>
        ))}
      </div>

    </Authenticated>
  );
}

export default Index;