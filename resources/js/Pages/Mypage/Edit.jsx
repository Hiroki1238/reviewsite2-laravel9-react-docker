import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/Authenticated";

const Edit = (props) => {
    console.log(props);
    const { auth } = props; //authの中にuserがあって、ユーザー情報が入ってるから、わざわざuserをコントローラーで連れてくる必要ないかも
    const {data, setData, put} = useForm({
          lastname: auth.user.lastname,
          name: auth.user.name,
          uname: auth.user.uname,
          email: auth.user.email,
          age: auth.user.age,
          profile: auth.user.profile,
          image_path: auth.user.image_path,
    })


    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/mypage/profile/update/${auth.user.id}`);
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    編集
                </h2>
            }>
            
            <div className="p-12">
                
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>氏</h2>
                        <input type="text" value={data.lastname} onChange={(e) => setData("lastname", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>                    
                    
                    <div>
                        <h2>名</h2>
                        <textarea value={data.name} onChange={(e) => setData("name", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>
                    
                    <div>
                        <h2>ユーザー名</h2>
                        <input type="text" value={data.uname} onChange={(e) => setData("uname", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>メールアドレス</h2>
                        <input type="text" value={data.email} onChange={(e) => setData("email", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>年齢</h2>
                        <input type="number" value={data.age} onChange={(e) => setData("age", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>プロフィール</h2>
                        <input type="text" value={data.profile} onChange={(e) => setData("profile", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2>画像</h2>
                        <input type="text" value={data.image_path} onChange={(e) => setData("image_path", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div> 
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                 <Link href={`/reviews/${auth.user.id}`}>戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;