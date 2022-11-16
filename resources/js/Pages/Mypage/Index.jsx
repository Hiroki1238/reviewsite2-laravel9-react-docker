import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Bookmark from "@/Components/Bookmark";
import Like from "@/Components/Like";
import ReviewList2 from "@/Components/ReviewList2";

const Index = (props) => {
    const { myReviews, myBookmarks, myVenues, auth, announcements } = props;
    //ProfileControllerのindexでReview::with('user','venue')としているのでvenueの情報も取得できている
    console.log(props);

    return (
        <Authenticated auth={props.auth} announcements={announcements}>
            <div className="p-6 mt-9 mb-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-2xl border border-gray-300 text-center w-5/7">
                <h1 className="text-title-purple1 mt-3 mb-5 text-3xl">
                    {auth.user.uname}
                </h1>

                {/*プロフィール写真がある場合はそれを表示、無い場合はダミーアイコンを表示*/}
                <div className="h-48 w-48 my-0 mx-auto">
                    {auth.user.image_path !== null ? (
                        <div>
                            <img
                                className="rounded-full aspect-square object-cover border-2 border-shadowgray1"
                                src={auth.user.image_path}
                            />
                        </div>
                    ) : (
                        <div>
                            <img
                                className="rounded-full aspect-square object-cover border-2 border-shadowgray1"
                                src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png"
                            />
                        </div>
                    )}
                </div>

                <div className="mt-8 mb-2">
                    <Link
                        className="text-white text-lg no-underline rounded-xl bg-my-purple3 px-3 py-2 hover:bg-title-purple1"
                        href={`/mypage/profile/${auth.user.id}`}
                    >
                        プロフィール詳細
                    </Link>
                </div>
            </div>

            <div className="p-6 mt-6 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <h2 className="text-title-purple1 text-3xl mt-3 mb-5">
                    あなたのレビュー
                </h2>

                <div className="ml-10 mr-10">
                    <ReviewList2 reviews={myReviews} />
                </div>
            </div>

            <div className="py-6 mt-9 mb-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-left w-5/7">
                <h3 className="text-title-purple1 text-3xl mt-4 mb-5 text-center">
                    お気に入りの会場
                </h3>
                <div className="ml-36 mr-10">
                <Like myVenues={myVenues} />
                </div>
            </div>

            <div className="py-6 mt-9 mb-7 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-left w-5/7">
                <h3 className="text-title-purple1 text-3xl text-center mt-4 mb-5">
                    ブックマークしたレビュー
                </h3>
                <div className="ml-36 mr-10">
                <Bookmark myBookmarks={myBookmarks} />
                </div>
            </div>

            <div className="py-6 mt-9 mb-7 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-left w-5/7">
                <h3 className="text-title-purple1 text-center text-3xl mt-4 mb-5">
                    進行中のチャット
                </h3>
                <div className="ml-20 text-3xl">
                <Link className="text-link-blue text-2xl hover:text-link-blue2 no-underline" href="/chat">No.1</Link>
                </div>
            </div>

            <div className="flex justify-center">
                <Link
                    className="text-gray-400 mb-3 text-xl no-underline"
                    onClick={() => window.history.back()}
                >
                    戻る
                </Link>
            </div>
        </Authenticated>
    );
};

export default Index;
