import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
  const { myReviews } = props;

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

      <div className="p-12 bg-my-gray1">
       <h1>検索結果を表示</h1>
       <h3>12345</h3>
       {/* <div id="icon" className="rounded">
       ここにアイコンを表示
       </div>
       <Link href="/mypage/profile/{ authUser.id }">{ authUser.name }のプロフィール</Link> */}
      </div>

      <Link href="search/">戻る</Link>

    </Authenticated>
  );
}

export default Index;