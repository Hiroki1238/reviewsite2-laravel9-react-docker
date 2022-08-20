import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth } = props;

    console.log(props);
    
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
              <h1 className="p-6 text-3xl text-title-purple1">管理者メニュー</h1>
            
                    <div className="flex flex-col">
                    <Link className="text-link-blue text-2xl mb-3" href="/admin/venues/add">会場の新規登録</Link>

                    <Link className="text-link-blue text-2xl mb-3" href="/admin/venues/select">会場の編集</Link>

                    <Link className="text-link-blue text-2xl mb-3" href="/admin/venues/delete">会場の削除</Link>

                    <Link className="text-link-blue text-2xl mb-3" href="/admin/reviews/delete">不適切なレビューの削除</Link>

                    <Link className="text-link-blue text-2xl mb-3" href="/admin/contact">お問い合わせに返信</Link>
                    </div>

                    <div className="w-5/7 ml-auto text-right space-x-3 mt-3 mr-2">
                    
                    <Link
                        className="text-gray-400 text-lg no-underline mr-5"
                        href="/"
                    >
                        ホームに戻る
                    </Link>
                    </div>
            </div>
        </Authenticated>
    );
};

export default Index;
