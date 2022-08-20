import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react';

const Index = (props) => {
  const { venues, prefecture } = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth}>

<div className="p-6 mt-6 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
      <div className="py-2 flex justify-left">
            <Link className="text-gray-400 text-xl no-underline" onClick={() => window.history.back()}>
                        戻る
                    </Link>
                    </div>
        <h1 className="text-title-purple1 text-4xl mb-7">{prefecture.name}の会場一覧</h1>
                    

        {venues.map((venue) => (
          <div key={venue.id}>
             {venues.map((venue) => (
              
            <h2 className="text-2xl mb-5">
              <Link className="text-link-blue" href={`/prefectures/venues/${venue.id}`}>{venue.name}</Link>
            </h2>
             ))}
          </div>
        ))}
      </div>

    </Authenticated>
  );
}

export default Index;