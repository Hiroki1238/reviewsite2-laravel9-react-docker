import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
  const { myReviews, auth } = props;

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        {auth.user.name}のマイページ
      </h2>
    }>

      <div className="p-12 bg-my-gray1">
        <h1>ここにアイコンを表示</h1>
       <h1>{auth.user.name}のマイページ</h1>
       <h1>{auth.user.id}</h1>
       <Link href={`/mypage/profile/${auth.user.id}`}>プロフィール詳細</Link>
       <h3>neko neko neko neko neko neko</h3>
       {/* <div id="icon" className="rounded">
       ここにアイコンを表示
       </div>
       <Link href="/mypage/profile/{ authUser.id }">{ authUser.name }のプロフィール</Link> */}
      </div>

       <div className="p-12">
      <h3>あなたのレビュー</h3>
      {myReviews.map((review) => (
          <div key={review.id}>
            <h2>
            <Link href={`/reviews/${review.id}`}>{review.title}</Link>
            </h2>
          </div>
        ))}
      <h3>お気に入りの会場</h3>
      

      <h3>ブックマーク</h3>
      </div>

    </Authenticated>
  );
}

export default Index;