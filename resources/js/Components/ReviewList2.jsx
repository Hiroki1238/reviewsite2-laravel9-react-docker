import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const ReviewList2 = ({reviews}) => {
  return (
    <div>
       {reviews.map((review) => (
                        <div key={review.id}>
                            <h2 className="m-2">
                                <Link
                                    className="text-link-blue text-2xl"
                                    href={`/reviews/${review.id}`}
                                >
                                    {review.title} <span className="text-lg">({review.venue.name})</span>
                                </Link>
                            </h2>
                        </div>
                    ))}
    </div>
  )
}

export default ReviewList2