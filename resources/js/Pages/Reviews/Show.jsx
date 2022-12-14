import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Guest from "@/Layouts/Guest";

//レビュー一覧で選択したレビューの詳細画面
const Show = (props) => {
    const { auth, review, images, isBookmarked, announcements } = props;
    const [value, setValue] = React.useState();

    const { data, setData, post } = useForm({
        user_id: auth.user?.id,
        review_id: review.id,
    });

    const handleBookmark = (e) => {
        e.preventDefault();
        post(`/bookmark/${review.id}`);
    };

    const handleNotBookmark = (e) => {
        e.preventDefault();
        post(`/notbookmark/${review.id}`); //returnから上は{`${image.image_path}`}の外側の中「」いらない,return内はいる
    };

    const handleDeletePost = (id) => {
        Inertia.delete(`/reviews/delete/${id}`, {
            onBefore: () =>
                confirm(
                    "一度削除した投稿は復活できません。本当に削除しますか？"
                ),
        });
    };

    const handleMessage = () => {
        confirm("ブックマークするにはログインが必要です");
    };

    console.log(review.venue.name);

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={props.auth} announcements={announcements}>
                    <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-2xl border border-gray-300 text-center w-5/7">
                        <div className="flex border">
                            <div className="w-16 x-auto mb-1 ml-2">
                                {review.user.image_path !== null ? (
                                    <div>
                                        <img
                                            className="rounded-full aspect-square object-cover border-2 border-shadowgray1 hover:border-my-purple3"
                                            src={review.user.image_path}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <img
                                            className="rounded-full aspect-square object-cover border-2 border-shadowgray1 hover:border-my-purple3"
                                            src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="text-xl mt-5 ml-3">
                                {/* レビューの投稿者とログインユーザーが一致する場合、そうでない場合で遷移先を分ける */}
                                {review.user.id == auth.user.id ? (
                                <Link href={`/mypage/profile/${review.user.id}`} className="no-underline text-gray-500 hover:text-my-purple3">{review.user.uname}
                                <span className="text-lg">さん</span>
                                </Link>
                                ):(
                                <Link href={`/mypage/public/${review.user.id}`} className="no-underline text-gray-500 hover:text-my-purple3">{review.user.uname}
                                <span className="text-lg">さん</span>
                                </Link>
                                )}
                            </div>
                            <div className="text-gray-400 text-xl ml-auto mr-3 mt-5">
                                {review.created_at}
                            </div>
                            {/* リレーションでレビュー投稿者の名前を表示 */}
                        </div>

                        {/* <div className="text-right px-2 text-gray-500 text-md">
                            {review.created_at}
                        </div> */}

                        <div className="mt-2 mb-7 border border-b-0 border-gray-400"></div>

                        <h1 className="pb-2 mb-5 text-2xl">
                            <Link
                                className="text-link-blue hover:text-link-blue2"
                                href={`/prefectures/venues/${review.venue_id}`}
                            >
                                {review.venue.name}のレビュー
                            </Link>
                        </h1>
                        {/*会場名をリレーションを使って表示した*/}
                        <div className="text-title-purple1 text-3xl mb-5 flex justify-center">
                            <div>{review.title}</div>
                            <div className="ml-3">
                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                <Rating
                                    className="mb-5"
                                    name="read-only"
                                    value={review.star3}
                                    readOnly
                                />
                            </Box>
                            </div>
                        </div>
                        <div>
                            {/* <h3 className="text-title-purple1">レビュー内容</h3> */}
                            <p className="text-title-gray text-2xl mb-9 px-6">
                                {review.body}
                            </p>
                            <h3 className="text-title-purple1 text-2xl">
                                座席
                            </h3>
                            <p className="text-title-gray text-2xl mt-2 mb-9">
                                {review.seat}
                            </p>
                            {/* <h3 className="text-title-purple1">10段階評価1</h3>
                    <p>{review.star1}</p> */}

                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                <h2 className="text-title-purple1 text-2xl mt-3 mb-2">
                                    ステージの見やすさ
                                </h2>
                                <Rating
                                    className="mb-5"
                                    name="read-only"
                                    value={review.star1}
                                    readOnly
                                />
                            </Box>

                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                <h2 className="text-title-purple1 text-2xl mt-3 mb-2">
                                    アクセスの良さ
                                </h2>
                                <Rating
                                    className="mb-5"
                                    name="read-only"
                                    value={review.star2}
                                    readOnly
                                />
                            </Box>

                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                {/* <Typography component="legend">Read only</Typography> */}
                                <h2 className="text-title-purple1 text-2xl mt-3 mb-2">
                                    総合点
                                </h2>
                                <Rating
                                    className="mb-5"
                                    name="read-only"
                                    value={review.star3}
                                    readOnly
                                />
                            </Box>

                            {/* <h3 className="text-title-purple1">10段階評価2</h3>
                    <p>{review.star2}</p>
                    <h3 className="text-title-purple1">10段階評価3</h3>
                    <p>{review.star3}</p> */}
                            <h3 className="text-title-purple1 text-2xl mt-4">
                                訪問日
                            </h3>
                            <p className="text-title-gray text-xl mt-2 mb-8">
                                {review.visited_at}
                            </p>
                        </div>
                        <div className="border border-b-0 border-gray-300">
                            {images !== null ? (
                                <div>
                                    {images.map((image) => (
                                        <img
                                            src={`${image.image_path}`}
                                            className="object-contain"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div>no image</div>
                            )}
                        </div>
                        {auth.user.id == review.user_id ? (
                            <div className="w-5/7 ml-auto text-right space-x-3 mt-3">
                                <Link
                                    className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                                    onClick={() => window.history.back()}
                                >
                                    戻る
                                </Link>

                                <Link
                                    className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                                    href={`/reviews/${review.id}/edit`}
                                >
                                    編集
                                </Link>

                                <button
                                    action="submit"
                                    className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                                    onClick={() => handleDeletePost(review.id)}
                                >
                                    削除
                                </button>

                                {isBookmarked ? (
                                    <button onClick={handleNotBookmark}>
                                        <BookmarkAddedIcon className="text-bookmark-red" />
                                    </button>
                                ) : (
                                    <button onClick={handleBookmark}>
                                        <BookmarkBorderIcon className="text-bookmark-red" />
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="w-5/7 ml-auto text-right space-x-3 mt-3">
                                <Link
                                    className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                                    onClick={() => window.history.back()}
                                >
                                    戻る
                                </Link>

                                {isBookmarked ? (
                                    <button onClick={handleNotBookmark}>
                                        <BookmarkAddedIcon className="text-bookmark-red" />
                                    </button>
                                ) : (
                                    <button onClick={handleBookmark}>
                                        <BookmarkBorderIcon className="text-bookmark-red" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </Authenticated>
            ) : (
                <Guest announcements={announcements}>
                    <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-2xl border border-gray-300 text-center w-5/7">
                        <div className="text-left px-2 text-gray-500 text-md">
                            {review.created_at}
                        </div>
                        <h1 className="py-2 mt-1 mb-5 text-2xl">
                            <Link
                                className="text-link-blue"
                                href={`/prefectures/venues/${review.venue_id}`}
                            >
                                {review.venue.name}のレビュー
                            </Link>
                        </h1>{" "}
                        {/*会場名をリレーションを使って表示した*/}
                        <h1 className="text-title-purple1 text-3xl mb-3">
                            {review.title}
                        </h1>
                        <div>
                            {/* <h3 className="text-title-purple1">レビュー内容</h3> */}
                            <p className="text-my-gray1 text-2xl mb-9 px-6">
                                {review.body}
                            </p>
                            <h3 className="text-title-purple1 text-2xl">
                                座席
                            </h3>
                            <p className="text-my-gray1 text-2xl mt-2 mb-9">
                                {review.seat}
                            </p>
                            {/* <h3 className="text-title-purple1">10段階評価1</h3>
            <p>{review.star1}</p> */}

                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                <h2 className="text-title-purple1 text-2xl mt-3 mb-2">
                                    ステージの見やすさ
                                </h2>
                                <Rating
                                    className="mb-5"
                                    name="read-only"
                                    value={review.star1}
                                    readOnly
                                />
                            </Box>

                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                <h2 className="text-title-purple1 text-2xl mt-3 mb-2">
                                    アクセスの良さ
                                </h2>
                                <Rating
                                    className="mb-5"
                                    name="read-only"
                                    value={review.star2}
                                    readOnly
                                />
                            </Box>

                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                {/* <Typography component="legend">Read only</Typography> */}
                                <h2 className="text-title-purple1 text-2xl mt-3 mb-2">
                                    総合点
                                </h2>
                                <Rating
                                    className="mb-5"
                                    name="read-only"
                                    value={review.star3}
                                    readOnly
                                />
                            </Box>

                            {/* <h3 className="text-title-purple1">10段階評価2</h3>
            <p>{review.star2}</p>
            <h3 className="text-title-purple1">10段階評価3</h3>
            <p>{review.star3}</p> */}
                            <h3 className="text-title-purple1 text-2xl mt-4">
                                訪問日
                            </h3>
                            <p className="text-my-gray1 text-xl mt-2 mb-8">
                                {review.visited_at}
                            </p>
                        </div>
                        <div className="border border-b-0 border-gray-300">
                            {images !== null ? (
                                <div>
                                    {images.map((image) => (
                                        <img
                                            src={`${image.image_path}`}
                                            className="object-contain mb-2"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div>no image</div>
                            )}
                        </div>
                        <div className="w-5/7 ml-auto text-right space-x-3 mt-3">
                            <Link
                                className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                                onClick={() => window.history.back()}
                            >
                                戻る
                            </Link>

                            {isBookmarked ? (
                                <button onClick={() => handleMessage()}>
                                    <BookmarkAddedIcon className="text-bookmark-red" />
                                </button>
                            ) : (
                                <button onClick={() => handleMessage()}>
                                    <BookmarkBorderIcon className="text-bookmark-red" />
                                </button>
                            )}
                        </div>
                    </div>
                </Guest>
            )}
        </div>
    );
};

export default Show;
