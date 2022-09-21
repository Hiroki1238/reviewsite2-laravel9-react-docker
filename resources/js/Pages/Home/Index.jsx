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
    const { auth, prefecture_array, reviews, images, announcements } = props;

    return (
        <div>
            {auth.user != null ? (
                <Authenticated auth={props.auth} announcements = {announcements}>
                     <div className="z-0">
                    <Slider1 images={images} />
                    </div>

                    <div className="w-full">
                        <div className="p-6 mt-6 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                            <h2 className="text-title-purple1 text-3xl mt-3 mb-5">
                                新着のレビュー
                            </h2>
                            <ReviewList2 reviews={reviews} />
                        </div>
                        <br />
                        <Search />
                        <br />
                        <Prefectures prefecture_array={prefecture_array} />
                        <Announcement announcements={announcements} />
                        <br />
                    </div>
                </Authenticated>
            ) : (
                <Guest announcements = {announcements}>
                    <div className="z-0">
                    <Slider1 images={images} />
                    </div>

                    <div className="w-full">
                        <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                            <h2 className="text-title-purple1 text-3xl mb-3">
                                新着のレビュー
                            </h2>
                            {reviews.map((review) => (
                                <div key={review.id}>
                                    <div className="m-2 font-kosugimaru">
                                        <Link
                                            className="text-link-blue text-2xl"
                                            href={`/reviews/${review.id}`}
                                        >
                                            {review.title}{" "}
                                            <span className="text-lg">
                                                ({review.venue.name})
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <br />

                        <Search />
                        <br />
                        <Prefectures prefecture_array={prefecture_array} />
                        <Announcement announcements={announcements} />
                        <br />
                    </div>
                </Guest>
            )}
        </div>
    );
};

export default Index;
