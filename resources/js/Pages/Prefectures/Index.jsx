import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
  const { prefecture_array } = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

      <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center font-zenmaru">
        <h1 className="text-my-purple">都道府県から探す</h1>
        {prefecture_array.map((region) => (
          <div key={region.id}>
            <h2>{region.region}</h2>
             {region.prefectures.map((prefecture) => (
              
            <p>
              {console.log(prefecture)}
              <Link href={`/prefectures/${prefecture.id}`}>{prefecture.name}</Link>
            </p>
             ))}
          </div>
        ))}
      </div>

    </Authenticated>
  );
}

export default Index;