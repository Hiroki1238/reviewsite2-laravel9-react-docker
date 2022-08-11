import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { auth, prefecture_array, reviews } = props;

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ホーム
                </h2>
            }>

            <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h2 className="text-title-purple1">新着のレビュー</h2>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <h2>
                            <Link href={`/reviews/${review.id}`}>
                                {review.title}
                            </Link>
                        </h2>
                    </div>
                ))}
                </div>
                <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h3 className="text-title-purple1">何か書く1</h3>
                <h3>何か書く</h3>
                <h3 className="text-title-purple1">何か書く2</h3>
                <h3>何か書く</h3>
                </div>

                <div className="p-6 bg-gray-200 w-96 my-0 mx-auto rounded-lg border border-gray-300 text-center">
        <h1 className="text-title-purple1">都道府県から探す</h1>
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
};

export default Index;
