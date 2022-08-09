import React,{useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/Authenticated";

const Edit = (props) => {
    const { auth } = props; //authの中にuserがあって、ユーザー情報が入ってるから、わざわざuserをコントローラーで連れてくる必要ないかも
    
    const {data, setData, post} = useForm({  
        image:"",

          lastname: auth.user.lastname,
          name: auth.user.name,
          uname: auth.user.uname,
          email: auth.user.email,
          age: auth.user.age,
          profile: auth.user.profile,
          image_path: auth.user.image_path,
    })
    const [preview, setPreview] = useState('');

    console.log(auth.user.id);


    const handleSendPosts = (e) => {
        e.preventDefault();
        post(`/mypage/profile/update/${auth.user.id}`);
        // Inertia.post(`/mypage/profile/update/${auth.user.id}`,{
        //     _method: 'put',
        //     image: data.image,
        // })

    }

    const handleChangeFile = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
      };

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    編集
                </h2>
            }>
            
            <div className="p-12">
                
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2 className="text-purple-800">氏</h2>
                        <input type="text" value={data.lastname} onChange={(e) => setData("lastname", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>                    
                    
                    <div>
                        <h2 className="text-purple-800">名</h2>
                        <textarea value={data.name} onChange={(e) => setData("name", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>
                    
                    <div>
                        <h2 className="text-purple-800">ユーザー名</h2>
                        <input type="text" value={data.uname} onChange={(e) => setData("uname", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2 className="text-purple-800">メールアドレス</h2>
                        <input type="text" value={data.email} onChange={(e) => setData("email", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2 className="text-purple-800">年齢</h2>
                        <input type="number" value={data.age} onChange={(e) => setData("age", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2 className="text-purple-800">プロフィール</h2>
                        <input type="text" value={data.profile} onChange={(e) => setData("profile", e.target.value)}/>
                        <span className="text-red-600">{props.errors.profile}</span>
                    </div>  

                    <div>
                        <h2 className="text-purple-800">画像</h2> {/*送信用*/}
                        <img src={preview} />
                        <input type="file" onChange={(e) => {setData("image", e.target.files[0]); handleChangeFile(e);}}/>
                        <span className="text-red-600">{props.errors.image}</span>
                    </div> 

                   
                    {/* 表示用 */}
                    {auth.user.image_path !== null ? (<div><img src={auth.user.image_path} className="h-48 w-full"/></div>) : (<div> <img src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png" className="h-48 w-full"/></div>) }
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">変更</button>
                </form>
                
                 <Link href={`/mypage/profile/${auth.user.id}`}>戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;