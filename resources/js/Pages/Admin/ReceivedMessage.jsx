import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth, contacts } = props;

    const handleSendPosts = (e) => {
        e.preventDefault();
        post();
    };
    console.log(props);

    return (
        <AdminAuthenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <form onSubmit={handleSendPosts}>
                    <h1 className="text-title-purple1 text-3xl mb-5">
                        お問い合わせに返信
                    </h1>

                    <div>
                        {contacts.map((contact) => (
                            <div key={contact.id} className="p-6 mt-9  my-0 mx-auto rounded-lg border-2 border-gray-300 bg-gray-250 text-center w-5/7">
                                <div>
                                    <p className="text-left px-2 text-gray-500">{contact.created_at}</p>
                                        <h1 className="text-title-purple1 text-xl">タイトル</h1>
                                        <p className="text-lg font-kosugimaru font-medium mb-5">{contact.title}</p>
                                        <h1 className="text-title-purple1 text-xl">お問い合わせ内容</h1>
                                        <p className="text-lg font-kosugimaru font-medium mb-5">{contact.body}</p>
                                        <h1 className="text-title-purple1 text-xl">ユーザー名</h1>
                                        <p className="text-lg mb-5">{contact.user_id}</p>
                                        <h1 className="text-title-purple1 text-xl">登録メールアドレス</h1>
                                        <p className="text-lg mb-5">{contact.user_email}</p>
                                </div>
                                <Link href={`/admin/contact/reply/${contact.id}`}>回答する</Link>
                            </div>
                        ))}
                    </div>

                    <div className="w-5/7 ml-auto text-right space-x-3 mt-3 mr-2">
                        <Link
                            className="text-gray-400 text-lg no-underline mr-5"
                            href="/admin/home"
                        >
                            管理者メニューに戻る
                        </Link>

                    </div>
                </form>
            </div>
        </AdminAuthenticated>
    );
};

export default Index;
