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
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    レビュー詳細
                </h2>
            }
        >
            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <h1 className="text-title-purple1">{venue.name}のレビュー</h1>
                <h2>収容人数 : {venue.scale_standing}人</h2>
                <h2>所在地 : {venue.address}</h2>
                <h2>
                    ホームページ : <Link href="venue.url">{venue.url}</Link>
                </h2>

              <div>
                {isLiked ? (<button onClick={handleUnlike}> <StarIcon /> </button>)
                : (<button onClick={handleLike}> <StarBorderIcon/> </button>)
              }
              </div>

                <h2>
                    <Link href={`/reviews/${venue.id}/create`}>新規投稿</Link>
                </h2>
                <Link href={`/prefectures/${prefecture.id}`}>戻る</Link>
            </div>

            <div className="p-6 bg-gray-200 w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
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
        </Authenticated>
    );
};

export default Index;
