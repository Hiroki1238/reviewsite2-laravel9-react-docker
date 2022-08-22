import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth } = props;

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            
                    <h1 className="text-title-purple1 text-3xl mb-5">
                        お問い合わせ
                    </h1>
                    <h1 className="py-2">送信しました</h1>
                    <div className="border border-b-0 border-gray-300 mt-7"></div>
                    
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
