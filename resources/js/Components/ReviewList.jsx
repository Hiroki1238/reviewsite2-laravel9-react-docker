import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const ReviewList = ({reviews}) => {
  return (
    <div className="mb-4">
        {reviews.map((review) => (
                    <div key={review.id}>
                        <div className="m-2">
                            <Link className="text-link-blue text-2xl hover:text-link-blue2" href={`/reviews/${review.id}`}>
                            <span className="text-lg">[{review.updated_at}]</span> {review.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
  )
}

export default ReviewList