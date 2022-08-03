import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { venues, prefecture, prefecture_array } = props;
    console.log(props);

    const InputWord = () => {
      const [word, setWord] = useState('');
    }

    const handleSearch = (e) => {
      console.log(e.target.value);
        e.preventDefault();
        post("/result"); //postを使用すれば、送信するデータを指定しなくても、実行されるとdataに格納されているデータを勝手に送信してくれる "/posts"というページに値を送っている
    };

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }
        >
            <div className="p-12">
                <h1>都道府県から探す</h1>

                {prefecture_array.map((region) => (
                    <div key={region.id}>
                        <h2>{region.region}</h2>
                        {region.prefectures.map((prefecture) => (
                            <p>
                                <Link href={`/prefectures/${prefecture.id}`}>
                                    {prefecture.name}
                                </Link>
                            </p>
                        ))}
                    </div>
                ))}
            </div>


            <div className="p-12">
                <form onSubmit={handleSearch}>
                    <h1>キーワードから探す</h1>
                    <input type="text" name="word" placeholder="キーワード検索" onChange={(e) => setWord("word", e.target.value)}></input>
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">検索</button>
                </form>
            </div>

            <div className="p-12">
                <h1>規模から探す</h1>
                <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">検索</button>
            </div>
        </Authenticated>
    );
};

export default Index;
