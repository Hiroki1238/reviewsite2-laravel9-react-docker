import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Edit = (props) => {
    const { review } = props;
    const { data, setData, put } = useForm({
        title: review.title,
        body: review.body,
        seat: review.seat,
        user_id: review.user_id,
        star1: review.star1,
        star2: review.star2,
        star3: review.star3,
        venue_id: review.venue_id,
        visited_at: review.visited_at,
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/reviews/update/${review.id}/`);
    };

    return (
        <Authenticated
            auth={props.auth}
            // header={
            //         <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //             編集
            //         </h2>
            //     }
        >
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2 className="text-title-purple1 text-2xl mt-4 mb-2">
                            タイトル
                        </h2>
                        <input
                            className="w-6/7 mb-8 text-xl rounded-lg"
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <span className="text-red-600">
                            {props.errors.title}
                        </span>
                    </div>

                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">
                            レビュー内容
                        </h2>
                        <textarea
                            className="w-6/7 h-80 mb-8 text-xl rounded-lg"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        <span className="text-red-600">
                            {props.errors.body}
                        </span>
                    </div>

                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2">
                            座席
                        </h2>
                        <input
                            className="mb-8 text-xl rounded-lg"
                            type="text"
                            value={data.seat}
                            onChange={(e) => setData("seat", e.target.value)}
                        />
                        <span className="text-red-600">
                            {props.errors.seat}
                        </span>
                    </div>

                    <Box sx={{ "& > legend": { mt: 2 } }}>
                        <h2 className="text-title-purple1 text-2xl mb-3">
                            ステージの見やすさ
                        </h2>
                        <Rating
                            value={data.star1}
                            name="simple-controlled"
                            onChange={(e) => setData("star1", e.target.value)}
                        />
                    </Box>

                    <Box sx={{ "& > legend": { mt: 2 } }}>
                        <h2 className="text-title-purple1 text-2xl mb-3 mt-4">
                            アクセスの良さ
                        </h2>
                        <Rating
                            value={data.star2}
                            name="simple-controlled"
                            onChange={(e) => setData("star2", e.target.value)}
                        />
                    </Box>

                    <Box sx={{ "& > legend": { mt: 2 } }}>
                        {/* <Typography component="legend">Controlled</Typography> */}
                        <h2 className="text-title-purple1 text-2xl mb-3 mt-4">
                            総合点
                        </h2>
                        <Rating
                        className="mb-3"
                            value={data.star3}
                            name="simple-controlled"
                            onChange={(e) => setData("star3", e.target.value)}
                        />
                    </Box>

                    <div>
                        <h2 className="text-title-purple1 text-2xl mb-2 mt-4">
                            訪問日
                        </h2>
                        <input
                            className="mb-5 text-xl rounded-lg"
                            type="date"
                            value={data.visited_at}
                            onChange={(e) =>
                                setData("visited_at", e.target.value)
                            }
                        />

                        <span className="text-red-600">
                            {props.errors.seat}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md"
                    >
                        保存
                    </button>
                </form>
                
                <div className="border border-b-0 border-gray-300 mt-2"></div>
                <div className="w-1/2 ml-auto text-right space-x-3 mt-3">
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

export default Edit;
