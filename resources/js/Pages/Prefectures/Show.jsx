import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react';

const Index = (props) => {
  const { venues, prefecture } = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

      <div className="p-12">
        <h1>{prefecture.name}の会場一覧</h1>
        <h1><Link href="/prefectures">戻る</Link></h1>

        {venues.map((venue) => (
          <div key={venue.id}>
            {venues.name}
             {venues.map((venue) => (
              
            <h2>
              <Link href={`/prefectures/venues/${venue.id}`}>{venue.name}</Link>
            </h2>
             ))}
          </div>
        ))}
      </div>

    </Authenticated>
  );
}

export default Index;