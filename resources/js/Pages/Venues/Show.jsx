import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'
import { SplitVendorChunkCache } from "vite";

const Index = (props) => {
  const { reviews } = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

      <div className="p-12">
        <h1>{venue.name}のレビュー</h1>

        {reviews.map((review) => (
          <div key={review.id}>
            <h2>{review.name}</h2>
              
            <h2>
              <Link href={`/prefectures/venues/${venue.id}`}>{venue.name}</Link>
            </h2>
          </div>
        ))}
      </div>

    </Authenticated>
  );
}

export default Index;