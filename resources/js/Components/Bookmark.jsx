import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Bookmark = ({ myBookmarks }) => {

    return (
        <div>
            {myBookmarks.map((review) => (
                    <div key={review.id}>
                        <div className="m-2 flex">
                            <div>
                                <img
                                    className="w-10 ml-8 mr-4"
                                    src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_image/noimage.png"
                                />
                                {/* テスト用 */}
                            </div>
    
                            <div>
                                <Link
                                    className="text-link-blue text-2xl hover:text-link-blue2"
                                    href={`/reviews/${review.id}`}
                                >
                                    {review.title}{" "}
                                    {/* <span className="text-lg">
                                        ({review.venue.name})
                                    </span> */}
                                </Link>
                            </div>
                            <div className="ml-3">
                            <Box
                                sx={{
                                    "& > legend": { mt: 2 },
                                }}
                            >
                                <Rating
                                    className="mb-5 mt-1"
                                    name="read-only"
                                    value={review.star3}
                                    readOnly
                                />
                            </Box>
                            </div>
                        </div>
                        <div className="w-7/8 border border-b-0 border-gray-400 mx-4 mt-7 mb-8"></div>
                    </div>
            ))}
        </div>
    );
};

export default Bookmark;
