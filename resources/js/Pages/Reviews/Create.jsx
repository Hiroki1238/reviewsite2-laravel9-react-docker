import React from "react";
import { inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";

const Create = (props) => {
    const { venue, auth } = props;
    const { data, setData, post } = useForm({
        images:"",

        //useForm と dataはセットで使う(dataという値は決まっているもの)
        title: "", //↑このpostは送信方式
        body: "",
        seat: "",
        user_id: auth.user.id,
        star1: "",
        star2: "",
        star3: "",
        venue_id: venue.id,
        visited_at: "",
    });

    const handleSendImage = (e) => {
        e.preventDefault();
        post("/reviews/store"); //postを使用すれば、送信するデータを指定しなくても、実行されるとdataに格納されているデータを勝手に送信してくれる "/posts"というページに値を送っている
    };

    const handleChangeFile = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
      };

    console.log(data);

    return (
        <Authenticated
            auth={props.auth}
             errors={props.errors} //これは何のため？
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    新規投稿
                </h2>
            }
        >
           <div className="p-6 bg-gray-200  w-1/2 my-0 mx-auto rounded-lg border border-gray-300 text-center">
                <form onSubmit={handleSendImage}>
                    <div>
                        <h2 className="text-title-purple1">タイトル</h2>
                        <input
                            type="text"
                            placeholder="タイトル"
                            onChange={(e) => setData("title", e.target.value)}
                        ></input>
                        <span className="text-red-600">
                            {props.errors.title}
                        </span>

                        <h2 className="text-title-purple1">レビュー内容</h2>
                        <textarea
                            placeholder="迷いました"
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        <span className="text-red-600">
                            {props.errors.body}
                        </span>

                        <h2 className="text-title-purple1">座席番号</h2>
                        <input
                            type="text"
                            placeholder="K17"
                            onChange={(e) => setData("seat", e.target.value)}
                        ></input>

                        <h2 className="text-title-purple1">10段階評価1</h2>
                        <input
                            type="number"
                            onChange={(e) => setData("star1", e.target.value)}
                        ></input>

                        <h2 className="text-title-purple1">10段階評価2</h2>
                        <input
                            type="number"
                            onChange={(e) => setData("star2", e.target.value)}
                        ></input>

                        <h2 className="text-title-purple1">10段階評価3</h2>
                        <input
                            type="number"
                            onChange={(e) => setData("star3", e.target.value)}
                        ></input>

                        <h2 className="text-title-purple1">訪問日</h2>
                        <input
                            type="date"
                            placeholder="2020-01-01"
                            onChange={(e) =>
                                setData("visited_at", e.target.value)
                            }
                        ></input>

                <div className="name-filed width">
                <div className="first-name-box">
                  <div className="text-label">
                  <h2 className="text-title-purple1">画像を選択</h2> {/*送信用*/}
                       
                        <input type="file" multiple onChange={(e) => {setData("images", e.target.files); ; handleChangeFile(e);}}/> {/*複数枚の時[0]不要*/}
                        <span className="text-red-600">{props.errors.image}</span>
                  </div>
                  
                  {/* errors.item_url || errors.item_url.* ?
                    <div class="alert alert-danger">{ errors.first('item_url') . errors.first('item_url.*') }</div> */}
                </div>
              </div>

                    </div>
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">投稿</button>
                </form>

                <Link href={`/prefectures/venues/${venue.id}`}>戻る</Link>
            </div>
        </Authenticated>
    );
};

export default Create;
