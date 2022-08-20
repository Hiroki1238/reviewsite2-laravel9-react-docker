import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Bookmark from "@/Components/Bookmark";
import Like from "@/Components/Like";
import ReviewList2 from "@/Components/ReviewList2";

const Index = (props) => {
    const { myReviews, myBookmarks, myVenues, auth } = props;
    //ProfileControllerのindexでReview::with('user','venue')としているのでvenueの情報も取得できている

    return (
        <Authenticated
            auth={props.auth}
        >
             <div className="p-6 mt-9 mb-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <h1 className="text-title-purple1 mb-5 text-2xl">
                    {auth.user.name}のマイページ
                </h1>

            {/*プロフィール写真がある場合はそれを表示、無い場合はダミーアイコンを表示*/}
                <div className="h-48 w-48 my-0 mx-auto"> 
                    {auth.user.image_path !== null ? (
                        <div>
                            <img className="rounded-full" src={auth.user.image_path} />
                        </div>
                    ) : (
                        <div>
                            <img className="rounded-full" src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png" />
                        </div>
                    )}
                </div>

                <div className="py-3">
                <Link className="text-link-blue text-lg" href={`/mypage/profile/${auth.user.id}`}>
                    プロフィール詳細
                </Link>
                </div>
            </div>

            <div className="py-6 mt-7 mb-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <h2 className="text-title-purple1 text-3xl mb-5">あなたのレビュー</h2>
                <ReviewList2 reviews={myReviews}/>
                
            </div>

            <div className="py-6 mt-7 mb-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <h3 className="text-title-purple1 text-3xl mb-5">お気に入りの会場</h3>
                    <Like myVenues={myVenues}/> 
            </div>
            
            <div className="py-6 mt-7 mb-7 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <h3 className="text-title-purple1 text-3xl mb-5">ブックマークしたレビュー</h3>
                <Bookmark myBookmarks={myBookmarks}/>
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
