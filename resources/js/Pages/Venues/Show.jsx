import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from '@inertiajs/inertia-react'

// このファイルは会場の情報とこの会場についているレビュー一覧を表示
const Index = (props) => {
  const { reviews, prefecture, venue, auth} = props;

  const { data, setData, post } = useForm({
    user_id: auth.user.id,
    venue_id: venue.id,
});

const handleLike = (e) => {
  e.preventDefault();
  post(`/like/${venue.id}`); //postを使用すれば、送信するデータを指定しなくても、実行されるとdataに格納されているデータを勝手に送信してくれる "/posts"というページに値を送っている
};

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        レビュー詳細
      </h2>
    }>
      <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
        <h1 className="text-purple-800">{venue.name}のレビュー</h1>
        <h2>収容人数 : {venue.scale_standing}人</h2>
        <h2>所在地 : {venue.address}</h2>
        <h2>ホームページ : <Link href="venue.url">{venue.url}</Link></h2>

        <button onClick={handleLike}>[いいね]</button>

        <h2><Link href={`/reviews/${venue.id}/create`}>新規投稿</Link></h2>
        <Link href={`/prefectures/${prefecture.id}`}>戻る</Link>
        </div>

    </Authenticated>
  );
}

export default Index;