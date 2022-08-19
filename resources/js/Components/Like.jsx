import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const Like = ({myVenues}) => {
  return (
    <div>
      {myVenues.map((venue) => (
                    <div key={venue.id}>
                        <h2 className="m-2">
                            <Link
                                className="text-link-blue text-2xl"
                                href={`/prefectures/venues/${venue.id}`}
                            >
                                {venue.name}
                            </Link>
                        </h2>
                    </div>
                ))}
    </div>
  )
}

export default Like