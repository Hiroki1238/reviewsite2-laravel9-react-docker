import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Bookmark = ({ myBookmarks }) => {
    return (
        <div>
            {myBookmarks.map((review) => (
                <div key={review.id}>
                    <h2 className="m-2 font-kosugimaru">
                        <Link
                            className="text-link-blue text-2xl"
                            href={`/reviews/${review.id}`}
                        >
                            {review.title}
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Bookmark;
