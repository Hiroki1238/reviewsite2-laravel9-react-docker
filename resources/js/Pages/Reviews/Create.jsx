import React from "react";
import { inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/Authenticated";

  const Create = (props) => {
    const { venue } = props;
    const {data, setData, post} = useForm({ //useForm と dataはセットで使う(dataという値は決まっているもの)
        title: "",        //↑このpostは送信方式
        body: "",
        seat: "",
        user_id: "",
        star1: "",
        star2: "",
        star3: "",
        venue_id: "",
        visited_at:"",

    })
    console.log("ねこ",venue);

    const handleSendPosts = (e) => {
        e.preventDefault();
        //console.log("e",e);
        post("/reviews/{review.id}"); //postを使用すれば、送信するデータを指定しなくても、実行されるとdataに格納されているデータを勝手に送信してくれる "/posts"というページに値を送っている
    }

  console.log(data);

  return (
    <Authenticated auth={props.auth} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Create
      </h2>}>

      <div className="p-12">
        <form onSubmit={handleSendPosts}>
          <div>
            <h2>Title</h2>
            <input type="text" placeholder="タイトル" onChange={ (e) => setData("title",e.target.value) }></input>
            <span className="text-red-600">{props.errors.title}</span>
      <h2>Body</h2>
      <textarea placeholder="今日も一日お疲れ様でした" onChange={(e) => setData("body",e.target.value)}></textarea>
      <span className="text-red-600">{props.errors.body}</span>
          </div>
          <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
        </form>
      <Link href={`/prefectures/venues/${venue.id}`}>戻る</Link>
      </div>

    </Authenticated>
  );
}

export default Create;