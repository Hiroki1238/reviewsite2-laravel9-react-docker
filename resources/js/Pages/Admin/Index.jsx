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
                    <Link className="text-link-blue text-2xl mb-1" href="/admin/venues">新規会場登録</Link>

                    <Link className="text-link-blue text-2xl" href="/admin/venues">会場の削除</Link>
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
            </div>
        </Authenticated>
    );
};

export default Index;