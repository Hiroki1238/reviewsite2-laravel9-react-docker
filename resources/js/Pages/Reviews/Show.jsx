import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

//レビュー一覧で選択したレビューの詳細画面
const Show = (props) => {
    const { auth, review, images, isBookmarked } = props;
    const [value, setValue] = React.useState(2);

    const { data, setData, post } = useForm({
        user_id: auth.user.id,
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

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    レビュー詳細
                </h2>
            }
        >
            <div className="p-6 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-1/2">
                <h1 className="text-title-purple1">{review.title}</h1>

                <div>
                    {isBookmarked ? (
                        <button onClick={handleNotBookmark}>
                            <BookmarkAddedIcon />
                        </button>
                    ) : (
                        <button onClick={handleBookmark}>
                            <BookmarkBorderIcon />
                        </button>
                    )}
                </div>

                <div>
                    <h3 className="text-title-purple1">本文</h3>
                    <p>{review.body}</p>
                    <h3 className="text-title-purple1">座席</h3>
                    <p>{review.seat}</p>
                    <h3 className="text-title-purple1">10段階評価1</h3>
                    <p>{review.star1}</p>



                    <Box
                        sx={{
                            "& > legend": { mt: 2 },
                        }}
                    >
                        <Typography component="legend">Controlled</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>



                    <h3 className="text-title-purple1">10段階評価2</h3>
                    <p>{review.star2}</p>
                    <h3 className="text-title-purple1">10段階評価3</h3>
                    <p>{review.star3}</p>
                    <h3 className="text-title-purple1">訪問日</h3>
                    <p>{review.visited_at}</p>
                </div>
                <div>
                    {images !== null ? (
                        <div>
                            {images.map((image) => (
                                <img
                                    src={`${image.image_path}`}
                                    className="h-48 w-full"
                                />
                            ))}
                        </div>
                    ) : (
                        <div>no image</div>
                    )}
                </div>

                <div>
                    <Link href={"/reviews/" + review.id + "/edit"}>編集</Link>
                </div>

                <div>
                    <Link href={`/prefectures/venues/${review.venue_id}`}>
                        戻る
                    </Link>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
