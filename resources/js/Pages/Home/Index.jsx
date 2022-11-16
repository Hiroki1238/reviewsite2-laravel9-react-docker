import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Prefectures from "@/Components/Prefectures";
import Slider1 from "@/Components/Slider1";
import Search from "@/Components/Search";
import Guest from "@/Layouts/Guest";
import ReviewList2 from "@/Components/ReviewList2";
import Announcement from "@/Components/Announcement";

const Index = (props) => {
    const {
        auth,
        prefecture_array,
        reviews,
        review_images,
        images,
        announcements,
    } = props;

    console.log(props);

    return (
        <div>
            {auth.user != null ? (
                <Authenticated
                    auth={props.auth}
                    announcements={announcements}
                    images={images}
                >
                    {/* <div className="z-0">
                    <Slider1 images={images} />
                    </div> */}

                    <div className="w-full">
                        <div className="p-6 mt-6 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-2xl border border-gray-300 text-center w-5/7">
                            <h2 className="text-title-purple1 text-3xl mt-3 mb-5">
                                新着のレビュー
                            </h2>
                            <div className="ml-10 mr-10">
                                <ReviewList2
                                    reviews={reviews}
                                    review_images={review_images}
                                />
                            </div>
                        </div>
                        <br />
                        <Search />
                        <br />
                        <Prefectures prefecture_array={prefecture_array} />
                        {/* <Announcement announcements={announcements} /> */}
                        <br />
                    </div>
                </Authenticated>
            ) : (
                <Guest announcements={announcements} images={images}>
                    {/* <div className="z-0">
                    <Slider1 images={images} />
                    </div> */}

<div className="w-full">
                        <div className="p-6 mt-6 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-2xl border border-gray-300 text-center w-5/7">
                            <h2 className="text-title-purple1 text-3xl mt-3 mb-5">
                                新着のレビュー
                            </h2>
                            <div className="ml-10 mr-10">
                                <ReviewList2
                                    reviews={reviews}
                                    review_images={review_images}
                                />
                            </div>
                        </div>
                        <br />
                        <Search />
                        <br />
                        <Prefectures prefecture_array={prefecture_array} />
                        {/* <Announcement announcements={announcements} /> */}
                        <br />
                    </div>
                </Guest>
            )}
        </div>
    );
};

export default Index;
