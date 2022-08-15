import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
//import SweetAlert2 from 'react-sweetalert2';

// このファイルは会場の情報とこの会場についているレビュー一覧を表示
const Index = (props) => {
    const { reviews, prefecture, venue, auth, isLiked } = props;

    const { data, setData, post } = useForm({
        user_id: auth.user.id,
        venue_id: venue.id,
    });

    //const MySwal = withReactContent(Swal);

    const handleLike = (e) => {
        e.preventDefault();
        post(`/like/${venue.id}`);

        // MySwal.fire({
        //   title: 'Success',
        //   text: 'いいねしました',
        //   icon: 'success',
        // })
    };

    const handleUnlike = (e) => {
        e.preventDefault();
        post(`/unlike/${venue.id}`);
    };

    return (
        <Authenticated
            auth={props.auth}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         レビュー詳細
            //     </h2>
            // }
        >

            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                <h1 className="text-title-purple1 text-3xl mb-4">{venue.name}のレビュー</h1>

              <div>
                <h2 className="py-1">収容人数 : {venue.scale_standing}人</h2>
                <h2 className="py-1">所在地 : {venue.address}</h2>
                <h2 className="py-1">
                    ホームページ : <Link className="text-gray-500" href="venue.url">{venue.url}</Link>
                </h2>
                
                 <br/>
                 <div className="mb-3">
                <Link className="text-gray-500 text-xl no-underline" href={`/prefectures/venues/pictures/${venue.id}`}>[ {venue.name}の画像一覧 ]</Link>
                </div>

                <h2>
                    <Link className="text-my-purple3 no-underline" href={`/reviews/${venue.id}/create`}>[ 新規投稿 ]</Link>
                    
                </h2>
                </div>
                <div className="mt-3 border border-b-0 border-gray-300">
                </div>

                <div className="w-1/2 ml-auto text-right space-x-3 mt-3" >
                <Link className="text-gray-400 hover:text-gray-600 no-underline text-lg" onClick={() => window.history.back()}>
                        戻る
                    </Link>

                {isLiked ? (<button onClick={handleUnlike}> <StarIcon className="text-yellow-500"/> </button>)
                : (<button onClick={handleLike}> <StarBorderIcon className="text-yellow-500"/> </button>)
              }
              </div>

            </div>

            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
                {reviews.map((review) => (
                    <div key={review.id}>
                        <h2 className="m-2">
                            <Link className="text-link-blue text-2xl" href={`/reviews/${review.id}`}>
                                {review.title}
                            </Link>
                        </h2>
                    </div>
                ))}
            </div>
        </Authenticated>
    );
};

export default Index;
