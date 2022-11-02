import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Public = (props) => {
    const { user, announcements } = props;

    console.log(user);

    return (
        <Authenticated auth={props.auth} announcements={announcements}>
            <div className="p-6 mt-9 mb-12 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                {/* <div id="icon" className="rounded">*/}

                <div className="h-48 w-48 my-0 mx-auto py-2 mb-7">
                    {user.image_path !== null ? (
                        <div>
                            <img
                                className="rounded-full"
                                src={user.image_path}
                            />
                        </div>
                    ) : (
                        <div>
                           
                            <img
                                className="rounded-full"
                                src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png"
                            />
                        </div>
                    )}
                </div>
                <div className="text-title-gray">
                  <div className="mt-8 mb-6">
                    <h2 className="text-title-purple1 text-2xl mb-1">氏名</h2>
                    <h3 className="text-2xl">
                        {user.lastname} {user.name}
                    </h3>
                    </div>

                    <div className="mb-6">
                    <h2 className="text-title-purple1  text-2xl mb-1 mt-4">
                        ユーザー名
                    </h2>
                    <h3 className="text-2xl">{user.uname}</h3>
                    </div>

                    <div className="mb-6">
                    <h2 className="text-title-purple1 text-2xl mb-1 mt-4">年齢</h2>
                    <h3 className="text-2xl">{user.age}代</h3>
                    </div>
                    
                    <div className="mb-8">
                    <h2 className="text-title-purple1 text-2xl mb-1 mt-4">
                        プロフィール
                    </h2>
                    <h3 className="text-2xl">{user.profile}</h3>
                    </div>

                    <div className="border border-b-0 border-gray-300 mx-4 mt-4"></div>
                </div>

                <div className="w-5/7 ml-auto text-right space-x-3 mt-3">
                    <Link
                        className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>

                </div>
            </div>
        </Authenticated>
    );
};

export default Public;
