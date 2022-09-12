import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth, announcements } = props;
    const {data, setData, post} = useForm({
        user_id: auth.user.id,
        user_email: auth.user.email,
        title: "",
        body: ""
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        post(`/mypage/contacts/store`);
    }
    
    return (
        <Authenticated auth={props.auth} errors={props.errors} announcements={announcements}>
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            
                <form onSubmit={handleSendPosts}>
                    <h1 className="text-title-purple1 text-3xl mt-4 mb-5">
                        お問い合わせ
                    </h1>
                    <div>
                        <input
                            className="w-6/7 mt-2 mb-8 text-lg font-medium font-kosugimaru rounded-lg"
                            type="text"
                            placeholder="タイトルを入力"
                            onChange={(e) => setData("title", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.title}
                        </span>

                        <textarea className="w-6/7 h-80 text-lg font-medium font-kosugimaru rounded-xl" placeholder="お問い合わせ内容を入力" onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">
                            {props.errors.body}
                        </span>
                    </div>

                    <div className="w-5/7 ml-auto text-right space-x-3 mt-3 mr-2">
                    
                    <Link
                        className="text-gray-400 text-lg no-underline mr-5"
                        href="/"
                    >
                        ホームに戻る
                    </Link>
                
                    <button
                        type="submit"
                        className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md"
                    >
                        送信
                    </button>
                    </div>
                </form>
            </div>

        </Authenticated>
    );
};

export default Index;
