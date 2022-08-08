import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
  const { auth } = props;

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        会員情報
      </h2>
    }>

      <div className="p-12">
        {/* <div id="icon" className="rounded">
       ここにアイコンを表示
       </div>
       <Link href="/mypage/profile/{ authUser.id }">{ authUser.name }のプロフィール</Link> */}
       <h1>氏名</h1>
       <h3>{auth.user.lastname}</h3>
       <h3>{auth.user.name}</h3>
       <h1>ユーザー名</h1>
       <h3>{auth.user.uname}</h3>
       <h1>年齢</h1>
       <h3>{auth.user.age}代</h3>
       <h1>プロフィール</h1>
       <h3>{auth.user.profile}</h3>

       <Link href={`/mypage/profile/edit/${auth.user.id}`}>編集</Link>
      </div>

    </Authenticated>
  );
}

export default Index;