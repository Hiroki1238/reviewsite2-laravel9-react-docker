import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'
import Guest from "@/Layouts/Guest";

const Word = (props) => {
  const { results, auth } = props;

  return (
    <div>
   {auth.user != null ? (
     <Authenticated auth={props.auth}>

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
   ):(
   <Guest>

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
  </Guest>
   )}
   </div>
   )
  }

export default Word;