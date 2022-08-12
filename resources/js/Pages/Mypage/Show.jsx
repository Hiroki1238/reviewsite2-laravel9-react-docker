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

      <div className="p-1.5 bg-gray-200  w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
        {/* <div id="icon" className="rounded">*/}
       <div className="h-48 w-48 my-0 mx-auto">
       {auth.user.image_path !== null ? (<div><img src={auth.user.image_path}/></div>) : (<div> <img src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png"/></div>) }
       </div>

       <h2 className="text-purple-800">氏名</h2>
       <h3>{auth.user.lastname} {auth.user.name}</h3>
       <h2 className="text-purple-800">ユーザー名</h2>
       <h3>{auth.user.uname}</h3>
       <h2 className="text-purple-800">年齢</h2>
       <h3>{auth.user.age}代</h3>
       <h2 className="text-purple-800">プロフィール</h2>
       <h3>{auth.user.profile}</h3>

       <Link href={`/mypage/profile/edit/${auth.user.id}`}>編集</Link>
       <h3><Link href={`/mypage/${auth.user.id}`}>戻る</Link></h3>
      </div>

    </Authenticated>
  );
}

export default Index;