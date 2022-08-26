import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const ReviewList = ({reviews}) => {
  return (
    <div className="mb-4">
        {reviews.map((review) => (
                    <div key={review.id}>
                        <h2 className="m-2">
                            <Link className="text-link-blue text-2xl" href={`/reviews/${review.id}`}>
                                {review.title}
                            </Link>
                        </h2>
                    </div>
                ))}
            </div>
  )
}

export default ReviewList