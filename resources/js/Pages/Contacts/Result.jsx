import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth } = props;

    const handleSendPosts = (e) => {
        e.preventDefault();
        post(`/mypage/contacts/store`);
    }
    console.log(props);
    

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
              <h1 className="text-my-gray1 text-3xl py-5">送信しました</h1>
            <div className="flex justify-left">
                    <Link
                        className="text-gray-400 text-xl no-underline mt-3"
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
