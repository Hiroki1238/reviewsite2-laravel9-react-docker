import React from 'react'
import { Link } from "@inertiajs/inertia-react";

function Prefectures({prefecture_array}) {
  return (
    <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
    <h1 className="text-title-purple1">都道府県から探す</h1>
    <div className ="divide-y space-y-5 divide-indigo-500">
    {prefecture_array.map((region) => (
      <div className="py-7 align-center text-center justify-center mx-auto box-sizing" key={region.id}>
        <h2>{region.region}</h2>
        <div className="w-full ml-0 space-x-3">
         {region.prefectures.map((prefecture) => (
          <Link href={`/prefectures/${prefecture.id}`}>{prefecture.name}</Link>
          ))}
          </div>
      </div>
    ))}
    </div>
  </div>
  )
}

export default Prefectures