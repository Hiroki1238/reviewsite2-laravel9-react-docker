import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth } = props;

    const handleSendPosts = (e) => {
        e.preventDefault();
        post();
    }
    console.log(props);
    

    return (
        <AdminAuthenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            
                <form onSubmit={handleSendPosts}>
                    <h1 className="text-title-purple1 text-3xl mb-5">
                        会場の削除
                    </h1>

                    <div className="w-5/7 ml-auto text-right space-x-3 mt-3 mr-2">
                    
                    <Link
                        className="text-gray-400 text-lg no-underline mr-5"
                        href="/admin/home"
                    >
                        管理者メニューに戻る
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
        </AdminAuthenticated>
    );
};

export default Index;
