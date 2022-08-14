import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import Prefectures from "@/Components/Prefectures";
import Slideshow from "@/Components/Slideshow";
import Slider1 from "@/Components/Slider1";

const Index = (props) => {
    const { auth, prefecture_array, reviews } = props;

    // const EnhancedSwipeableViews = autoPlay(SwipeableViews);


    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         ホーム
            //     </h2>
            // }
            >

        <Slider1 />
   
      <div className="w-full h-full">
            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h2 className="text-title-purple1">新着のレビュー</h2>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <h2 className="m-2">
                            <Link className="text-link-blue" href={`/reviews/${review.id}`}>
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
