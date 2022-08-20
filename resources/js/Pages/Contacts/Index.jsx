import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth } = props;
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
    console.log(props);
    

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            <div className="flex justify-left">
                    <Link
                        className="text-gray-400 text-xl no-underline"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>
                </div>
                <form onSubmit={handleSendPosts}>
                    <h1 className="text-title-purple1 text-3xl mb-5">
                        お問い合わせ
                    </h1>
                    <div>
                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            placeholder="タイトルを入力"
                            onChange={(e) => setData("title", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.title}
                        </span>

                        <textarea className="w-6/7 h-60" placeholder="お問い合わせ内容を入力" onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">
                            {props.errors.body}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md"
                    >
                        送信
                    </button>
                </form>
            </div>
        </Authenticated>
    );
};

export default Index;
