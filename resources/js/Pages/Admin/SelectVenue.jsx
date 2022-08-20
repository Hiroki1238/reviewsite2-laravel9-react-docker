import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import Search from "@/Components/Search";

const Index = (props) => {
    const { venue } = props;
    const {data, setData, post} = useForm({
        name: venue.name,
        keyword: venue.keyword,
        scale_standing: venue.scale_standing,
        scale_sitting: venue.scale_sitting,
        location_path: venue.location_path,
        address: venue.address,
        prefecture_id: venue.prefecture_id,
        url: venue.url,
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/admin/venue/update`);
    }
    console.log(props);
    

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
        <div>
            <Search />

            <div className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7"></div>

                        
                    </div>

                    <div className="w-5/7 ml-auto text-right space-x-3 mt-3 mr-2">
                    
                    <Link
                        className="text-gray-400 text-lg no-underline mr-5"
                        href="/admin/home"
                    >
                        管理者メニューに戻る
                    </Link>
                
                    <button
                        type="submit"
                        className="px-3 py-1 mt-5 bg-title-purple2 m-2 text-white hover:bg-purple-400 rounded-md"
                    >
                        送信
                    </button>
                    </div>
        </Authenticated>
    );
};

export default Index;
