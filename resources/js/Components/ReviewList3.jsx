import React from "react";
import { Link } from "@inertiajs/inertia-react";

const ReviewList3 = ({ reviews, review_images }) => {
    return (
        <div className="mb-4">
            {reviews.map((review) => (
                <div key={review.id}>
                    <div className="m-2 flex">
                        <div>
                            <img
                                className="w-10 mr-4"
                                src={review_images[0].image_path}
                            />{" "}
                            {/* テスト用 */}
                        </div>

                        <div>
                            <Link
                                className="text-link-blue text-2xl hover:text-link-blue2"
                                href={`/reviews/${review.id}`}
                            >
                                {review.title}{" "}
                                <span className="text-lg">
                                    ({review.venue.name})
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList3;
