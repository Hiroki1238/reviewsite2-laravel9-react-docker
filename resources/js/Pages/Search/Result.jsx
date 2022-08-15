import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'

const Word = (props) => {
  const { results } = props;

  return (
    <Authenticated auth={props.auth}
    // header={
    //   <h2 className="font-semibold text-xl text-gray-800 leading-tight">
    //     検索結果
    //   </h2>
    // }
    >

      <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
       <h1>検索結果を表示</h1>
       {results.map((result) => (
          <div key={result.id}>
            <h2 className="m-2">
            <Link className="text-link-blue" href={`/prefectures/venues/${result.id}`}>{result.name}</Link>
            </h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-3 mt-3">
                    <Link
                        className="text-gray-400 hover:text-gray-600 no-underline text-lg"
                        onClick={() => window.history.back()}
                    >
                        戻る
                    </Link>
                </div>
    </Authenticated>
  );
}

export default Word;