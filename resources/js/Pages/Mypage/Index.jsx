import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { myReviews, auth } = props;

    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         {auth.user.name}のマイページ
            //     </h2>
            // }
        >
            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                {/* グレーのボックス(背景)に関する指定 */}
                <h1 className="text-title-purple1">
                    {auth.user.name}のマイページ
                </h1>

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

                <Link href={`/mypage/profile/${auth.user.id}`}>
                    プロフィール詳細
                </Link>
            </div>

            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h2 className="text-title-purple1">あなたのレビュー</h2>
                {myReviews.map((review) => (
                    <div key={review.id}>
                        <h2 className="m-2">
                            <Link href={`/reviews/${review.id}`}>
                                {review.title}
                            </Link>
                        </h2>
                    </div>
                ))}
            </div>
            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h3 className="text-title-purple1 ">お気に入りの会場</h3>
                <h3>お気に入り一覧を表示</h3>
            </div>
            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h3 className="text-title-purple1">ブックマーク</h3>
                <h3>ブックマーク一覧を表示</h3>
            </div>

            <Link onClick={() => window.history.back()}>
                        戻る
                    </Link>
        </Authenticated>
    );
};

export default Index;
