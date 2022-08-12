import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Word = (props) => {
  const { results } = props;

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        検索結果
      </h2>
    }>

      <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
       <h1>検索結果を表示</h1>
       {results.map((result) => (
          <div key={result.id}>
            <h2>
            <Link href={`/prefectures/venues/${result.id}`}>{result.name}</Link>
            </h2>
          </div>
        ))}
      </div>

      <Link href="/search">戻る</Link>

    </Authenticated>
  );
}

export default Word;