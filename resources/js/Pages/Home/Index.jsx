import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Prefectures from "@/Components/Prefectures";

const Index = (props) => {
    const { auth, prefecture_array, reviews } = props;

    const EnhancedSwipeableViews = autoPlay(SwipeableViews);


    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         ホーム
            //     </h2>
            // }
            >

{/* <EnhancedSwipeableViews interval={4000}>
      <div><img src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png" /></div>
      <div><img src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png" /></div>
      <div><img src="https://reviewsite1-laravel9.s3.ap-northeast-1.amazonaws.com/dummy_icon/40PoY9t4ftGWao11657527184_1657528010.png" /></div>
    </EnhancedSwipeableViews>      */}
   
      <div className="w-full h-full">
            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h2 className="text-title-purple1">新着のレビュー</h2>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <h2 className="m-2">
                            <Link href={`/reviews/${review.id}`}>
                                {review.title} (会場名を表示)
                            </Link>
                        </h2>
                    </div>
                ))}
                </div>
                <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h3 className="text-title-purple1">何か書く1</h3>
                <h3>何か書く</h3>
                <hr className="border-indigo-500"/>
                <h3 className="text-title-purple1">何か書く2</h3>
                <h3>何か書く</h3>
                </div>

              <Prefectures prefecture_array={prefecture_array}/>
      </div>

        </Authenticated>
    );
};


export default Index;
