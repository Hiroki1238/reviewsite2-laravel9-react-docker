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
        <Authenticated auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         編集
            //     </h2>
            // }
            >
            
            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">氏名</h2>
                        <input className="mr-2 mb-5" type="text" value={data.lastname} onChange={(e) => setData("lastname", e.target.value)}/>
                        <input className="ml-2 mb-6"type="text" value={data.name} onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.lastname}</span>
                        <span className="text-red-600">{props.errors.name}</span>
                    </div>                    
                    
                    {/* <div>
                        <h2 className="text-title-purple1 text-2xl">名</h2>
                        <input type="text" value={data.name} onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                    </div> */}
                    
                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">ユーザー名</h2>
                        <input className="mb-6" type="text" value={data.uname} onChange={(e) => setData("uname", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">メールアドレス</h2>
                        <input className="mb-6" type="text" value={data.email} onChange={(e) => setData("email", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">年齢</h2>
                        <input className="mb-6" type="number" value={data.age} onChange={(e) => setData("age", e.target.value)}/>
                        <span className="text-red-600">{props.errors.seat}</span>
                    </div>  

                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">プロフィール</h2>
                        <input className="mb-6" type="text" value={data.profile} onChange={(e) => setData("profile", e.target.value)}/>
                        <span className="text-red-600">{props.errors.profile}</span>
                    </div>  

                    <div>
                        <h2 className="text-title-purple1 text-2xl">画像</h2> {/*送信用*/}
                        <img src={preview} />
                        <input className="mt-2 mb-4" type="file" onChange={(e) => {setData("image", e.target.files[0]); handleChangeFile(e);}}/>
                        <span className="text-red-600">{props.errors.image}</span>
                    </div> 

                   
                    {/* 表示用 */}
                    <div className="h-48 w-48 my-0 mx-auto">
                    {auth.user.image_path !== null ? (<div><img className="rounded-full" src={auth.user.image_path}/></div>) : (<div><img className="rounded-full" src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png"/></div>) }
                    </div>
                    
                    <button type="submit" className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md">変更</button>
                </form>
                <div className="border border-b-0 border-gray-300 mt-2"></div>
                
                <div className="w-5/7 ml-auto text-right space-x-3 mt-2" >
                <Link className="text-gray-400 hover:text-gray-600 no-underline text-lg" onClick={() => window.history.back()}>
                        戻る
                    </Link>
                    </div>
                    </div>
            
        </Authenticated>
        );
}

export default Edit;