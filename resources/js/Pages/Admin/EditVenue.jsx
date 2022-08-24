import React from "react";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { Link, useForm } from "@inertiajs/inertia-react";

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
        <AdminAuthenticated auth={props.auth} errors={props.errors}>
            <div className="p-6 mt-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            
                <form onSubmit={handleSendPosts}>
                    <h1 className="text-title-purple1 text-3xl mb-5">
                        会場情報の編集
                    </h1>
                    <div>
                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.name}
                        </span>

                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            value={data.keyword}
                            onChange={(e) => setData("keyword", e.target.value)}
                        ></input>

                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            value={data.scale_standing}
                            onChange={(e) => setData("scale_standing", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.scale_standing}
                        </span>

                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            value={data.scale_sitting}
                            onChange={(e) => setData("scale_sitting", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.scale_sitting}
                        </span>

                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            value={data.location_path}
                            onChange={(e) => setData("location_path", e.target.value)}
                        ></input>

                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.address}
                        </span>

                        <select className="w-6/7 mb-6" value={data.prefecture_id} type="number" onChange={(e) => setData("prefecture_id", e.target.value)}>
                          <option value="1">北海道</option>
                          <option value="2">青森県</option>
                          <option value="3">岩手県</option>
                          <option value="4">宮城県</option>
                          <option value="5">秋田県</option>
                          <option value="6">山形県</option>
                          <option value="7">福島県</option>
                          <option value="8">茨城県</option>
                          <option value="9">栃木県</option>
                          <option value="10">群馬県</option>
                          <option value="11">埼玉県</option>
                          <option value="12">千葉県</option>
                          <option value="13">東京都</option>
                          <option value="14">神奈川県</option>
                          <option value="15">新潟県</option>
                          <option value="16">富山県</option>
                          <option value="17">石川県</option>
                          <option value="18">福井県</option>
                          <option value="19">山梨県</option>
                          <option value="20">長野県</option>
                          <option value="21">岐阜県</option>
                          <option value="22">静岡県</option>
                          <option value="23">愛知県</option>
                          <option value="24">三重県</option>
                          <option value="25">滋賀県</option>
                          <option value="26">京都府</option>
                          <option value="27">大阪府</option>
                          <option value="28">兵庫県</option>
                          <option value="29">奈良県</option>
                          <option value="30">和歌山県</option>
                          <option value="31">鳥取県</option>
                          <option value="32">島根県</option>
                          <option value="33">岡山県</option>
                          <option value="34">広島県</option>
                          <option value="35">山口県</option>
                          <option value="36">徳島県</option>
                          <option value="37">香川県</option>
                          <option value="38">愛媛県</option>
                          <option value="39">高知県</option>
                          <option value="40">福岡県</option>
                          <option value="41">佐賀県</option>
                          <option value="42">長崎県</option>
                          <option value="43">熊本県</option>
                          <option value="44">大分県</option>
                          <option value="45">宮崎県</option>
                          <option value="46">鹿児島県</option>
                          <option value="47">沖縄県</option>
                        </select>
                        <span className="text-red-600">
                            {props.errors.prefecture_id}
                        </span>

                        <input
                            className="w-6/7 mb-6"
                            type="text"
                            value={data.url}
                            onChange={(e) => setData("url", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.url}
                        </span>

                        
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
                </form>
            </div>
        </AdminAuthenticated>
    );
};

export default Index;
