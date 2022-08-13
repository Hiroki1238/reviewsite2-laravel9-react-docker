import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from '@inertiajs/inertia-react'
import Prefectures from "@/Components/Prefectures";

const Index = (props) => {
  const { prefecture_array } = props;
  console.log(props);

  return (
    <Authenticated auth={props.auth}
    // header={
    //   <h2 className="font-semibold text-xl text-gray-800 leading-tight">
    //     都道府県から探す
    //   </h2>
    // }
    >

        <Prefectures prefecture_array={prefecture_array}/>
        
        <Link onClick={() => window.history.back()}>
            戻る
        </Link>



    </Authenticated>
  );
}

export default Index;