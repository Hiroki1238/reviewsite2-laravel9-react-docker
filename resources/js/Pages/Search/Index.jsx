import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import Prefectures from "@/Components/Prefectures";
import Search from "@/Components/Search";
import Guest from "@/Layouts/Guest";

const Index = (props) => {
    const { auth, prefecture_array, announcements } = props;
    // const { data, setData, post } = useForm({
    //     word: "",
    //     capacity: "",
    // })

    return (
        <div>
       {auth.user != null ? (
           <Authenticated auth={props.auth} announcements = {announcements}>

     <Search />
     <div className="py-1"></div>
         <Prefectures prefecture_array={prefecture_array} />
         <div className="py-5 flex justify-center">
         <Link className="text-gray-400 text-xl no-underline" onClick={() => window.history.back()}>
                     戻る
                 </Link>
                 </div>
     </Authenticated>
       ):(
        <Guest announcements = {announcements}>

    <Search />
    <div className="py-1"></div>
        <Prefectures prefecture_array={prefecture_array} />
        <div className="py-5 flex justify-center">
        <Link className="text-gray-400 text-xl no-underline" onClick={() => window.history.back()}>
                    戻る
                </Link>
                </div>
    </Guest>
       )}
       </div>
       )
}


export default Index;
