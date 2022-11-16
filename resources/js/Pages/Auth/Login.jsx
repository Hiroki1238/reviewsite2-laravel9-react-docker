import React, { useEffect } from "react";
import Button from "@/Components/Button";
// import GoogleButton from "@/Components/GoogleButton";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword, announcements }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
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

        post(route("login"));
    };

    return (
        <Guest announcements={announcements}>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form
                className="px-7 py-4 mt-16 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-2xl border border-gray-300 text-center w-5/7"
                onSubmit={submit}
            >
                <div>
                    <Label
                        className="mt-5 mb-3 text-2xl text-title-purple1"
                        forInput="email"
                        value="メールアドレス"
                    />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full font-zenmaru"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-8">
                    <Label
                        className="mt-5 mb-3 text-2xl text-title-purple1"
                        forInput="password"
                        value="パスワード"
                    />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full font-zenmaru"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center ml-12">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-md text-gray-600">
                            ログイン情報を記憶する
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-6">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="mr-auto underline text-md text-gray-600 hover:text-gray-900"
                        >
                            パスワードの再設定
                        </Link>
                    )}

                    <div className="flex mt-2">

                    <div>
                       
                        <a
                            href="/login/google"
                        >
                            <img className="w-24" src={"/image/google_signin.png"} />
                        </a>
                        </div>
                        <div>

                        {/* className="no-underline bg-blue-500 hover:bg-blue-600 py-2 px-3 rounded-lg mr-2 text-white" */}

                        <Button
                            className="ml-4 text-lg bg-my-purple1 hover:bg-my-purple0"
                            processing={processing}
                        >
                            ログイン
                        </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Guest>
    );
}
