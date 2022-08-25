import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { Link, useForm } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth, targetContact } = props;

    const {data, setData, post} = useForm({
        title: "",
        body: "",
        contact_id: targetContact.id,
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/admin/contact/store");
    };

    console.log(targetContact);

    return (
        <AdminAuthenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <form onSubmit={handleSendPosts}>
                    <h1 className="text-title-purple1 text-3xl mb-5">
                        お問い合わせに返信
                    </h1>

                    <div>
                            <div className="p-6 mt-9  my-0 mx-auto rounded-lg border-2 border-gray-300 bg-gray-250 text-center w-6/7">
                                <div>
                                        <h1 className="text-xl">タイトル: {targetContact.title}</h1>
                                        <p className="text-xl">お問い合わせ内容: {targetContact.body}</p>
                                        <p className="text-xl">ユーザー名: {targetContact.user_id}</p>
                                        <p className="text-xl">登録メールアドレス: {targetContact.user_email}</p>
                                </div>
                            </div>
                            
                            
                            <div className="mt-8">
                            <form onSubmit={handleSendPosts}>
                            <h1 className="text-title-purple1 mb-4">タイトル</h1>
                            <input className="w-6/7 mb-8" type="text" placeholder="タイトルを入力" onChange={(e) => setData("title", e.target.value)}></input>
                            <span className="text-red-600">
                            {props.errors.title}
                          </span>
                            <h1 className="text-title-purple1 mb-4">本文</h1>
                            <textarea className="w-6/7 h-60" placeholder="回答を入力" onChange={(e) => setData("body", e.target.value)}></textarea>
                            <span className="text-red-600">
                            {props.errors.body}
                        </span>
                        </form>
                            </div>
                    </div>

                    <div className="w-5/7 ml-auto text-right space-x-3 mt-3 mr-2">
                        <Link
                            className="text-gray-400 text-lg no-underline mr-5"
                            href="/admin/home"
                        >
                            管理者メニューに戻る
                        </Link>

                        <button type="submit" className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md">
                        送信
                        </button>

                    </div>
                </form>
            </div>
        </AdminAuthenticated>
    );
};

export default Index;
