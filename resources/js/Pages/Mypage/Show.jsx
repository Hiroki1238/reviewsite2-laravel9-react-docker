import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
  const { auth } = props;

  return (
    <Authenticated auth={props.auth}
    // header={
    //   <h2 className="font-semibold text-xl text-gray-800 leading-tight">
    //     会員情報
    //   </h2>
    // }
    >

        <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
        {/* <div id="icon" className="rounded">*/}

       <div className="h-48 w-48 my-0 mx-auto py-2 mb-7">
       {auth.user.image_path !== null ? (<div><img className="rounded-full" src={auth.user.image_path}/></div>) : (<div> <img className="rounded-full" src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png"/></div>) }
       </div>

       <h2 className="text-title-purple1 text-2xl">氏名</h2>
       <h3 className="text-my-gray1 text-xl">{auth.user.lastname} {auth.user.name}</h3>
       <h2 className="text-title-purple1 text-2xl mt-4">ユーザー名</h2>
       <h3 className="text-my-gray1 text-xl">{auth.user.uname}</h3>
       <h2 className="text-title-purple1 text-2xl mt-4">年齢</h2>
       <h3 className="text-my-gray1 text-xl">{auth.user.age}代</h3>
       <h2 className="text-title-purple1 text-2xl mt-4">プロフィール</h2>
       <h3 className="text-my-gray1 text-xl">{auth.user.profile}</h3>
       <div className="border border-b-0 border-gray-300 mx-4 mt-4"></div>
       

       <div className="w-5/7 ml-auto text-right space-x-3 mt-3">

                <Link
                       className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>

                    <Link className="text-gray-400 hover:text-gray-600 no-underline text-lg" href={`/mypage/profile/edit/${auth.user.id}`}>編集</Link>
        </div>
      </div>

    </Authenticated>
  );
}

export default Index;