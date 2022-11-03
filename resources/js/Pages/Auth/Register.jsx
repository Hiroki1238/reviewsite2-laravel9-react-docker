import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register({ announcements }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        lastname: "",
        name: "",
        uname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest announcements={announcements}>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form
                className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 w-5/7"
                onSubmit={submit}
            >
                <h2 className="mt-4 ml-3">会員登録</h2>
                <div className="mt-4 border border-b-0 border-gray-300"></div>
                <div className="flex">
                    <div>
                        <Label
                            className="mt-5 mb-4 text-left ml-16 text-2xl text-title-purple1"
                            forInput="lastname"
                            value="氏名"
                        />

                        <Input
                            type="text"
                            name="lastname"
                            value={data.lastname}
                            className="ml-14 mt-1 block w-full text-2xl text-title-gray"
                            autoComplete="lastname"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label
                            forInput="name"
                        />

                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="ml-10 mt-14 block w-full text-2xl text-title-gray"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mt-7 border border-b-0 border-gray-300"></div>

                <div>
                    <Label
                        className=" mt-5 mb-3 text-left ml-16 text-2xl text-title-purple1"
                        forInput="uname"
                        value="ユーザー名"
                    />

                    <Input
                        type="text"
                        name="uname"
                        value={data.uname}
                        className="mt-1 block w-full text-2xl text-title-gray"
                        autoComplete="uname"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-7 border border-b-0 border-gray-300"></div>

                <div className="mt-4">
                    <Label
                        className="mt-5 mb-3 text-left ml-16 text-2xl text-title-purple1"
                        forInput="email"
                        value="メールアドレス"
                    />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full font-zenmaru text-2xl text-title-gray"
                        autoComplete="email"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-7 border border-b-0 border-gray-300"></div>

                <div className="mt-4">
                    <Label
                        className="mt-5 mb-3 text-left ml-16 text-2xl text-title-purple1"
                        forInput="password"
                        value="パスワード"
                    />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full font-zenmaru text-2xl text-title-gray"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-7 border border-b-0 border-gray-300"></div>

                <div className="mt-4">
                    <Label
                        className="mt-5 mb-3 text-left ml-16 text-2xl text-title-purple1"
                        forInput="password_confirmation"
                        value="パスワード（確認）"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 mb-5 block w-full font-zenmaru text-2xl text-title-gray"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-7 border border-b-0 border-gray-300"></div>

                <div className="mt-4">
                <div className="flex items-center justify-end mt-6">

                <Link
                        href={route("login")}
                        className="mr-auto underline text-md text-gray-600 hover:text-gray-900"
                    >
                        会員の方はこちら
                    </Link>
                    
                    <a
                            href="/login/google"
                            className="no-underline bg-blue-500 hover:bg-blue-600 py-2 px-3 rounded-lg mr-2 text-white"
                        >
                            Googleアカウントでログイン
                        </a>

                    <Button
                        className="ml-4 py-3 text-lg bg-my-purple1 hover:bg-my-purple0"
                        processing={processing}
                    >
                        登録
                    </Button>
                    </div>
                </div>
            </form>
        </Guest>
    );
}
