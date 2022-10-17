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

                <div className="flex justify-end mt-4">
                    <div className="py-2 shadow-lg shadow-shadowgray1 bg-blue-500 rounded-xl my-0 mr-auto border border-gray-300 text-center w-2/7 text-sm">
                        <a
                            href="/login/google"
                            className="no-underline text-white"
                        >
                            Googleアカウントでログイン
                        </a>
                    </div>

                    <Link
                        href={route("login")}
                        className="underline text-lg mt-2 text-gray-600 hover:text-gray-900"
                    >
                        会員の方はこちら
                    </Link>

                    <Button
                        className="ml-6 text-xl bg-my-purple2"
                        processing={processing}
                    >
                        登録
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
