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

      <div className="p-12">
        <h1>都道府県から探す</h1>

        {prefecture_array.map((region) => (
          <div key={region.id}>
            <h2>{region.region}</h2>
             {region.prefectures.map((prefecture) => (
              
            <h2>
              {console.log(prefecture)}
              <Link href={`/prefectures/${prefecture.id}`}>{prefecture.name}</Link>
            </h2>
             ))}
          </div>
        ))}
      </div>

    </Authenticated>
  );
}

export default Index;