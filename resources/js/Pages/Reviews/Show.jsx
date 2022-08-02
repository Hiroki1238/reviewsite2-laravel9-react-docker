import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

// このファイルは各会場ごとのレビューを表示するためのjsx

const Index = (props) => {
  const { prefecture_array } = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>

{/* レビューのタイトルをクリックして出てくる各レビューの詳細画面 */}

      <div className="p-12"> 
        <h1>レビュー</h1>

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