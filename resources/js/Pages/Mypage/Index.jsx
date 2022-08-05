import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
  const { myReviews, auth } = props;

  // console.log(auth.user.name);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        {auth.user.name}のマイページ
      </h2>
    }>

      <div className="p-12 bg-my-gray1">
       <h1>{auth.user.name}のマイページ</h1>
       <Link>プロフィール</Link>
       <h3>neko neko neko neko neko neko</h3>
       {/* <div id="icon" className="rounded">
       ここにアイコンを表示
       </div>
       <Link href="/mypage/profile/{ authUser.id }">{ authUser.name }のプロフィール</Link> */}
      </div>

    </Authenticated>
  );
}

export default Index;