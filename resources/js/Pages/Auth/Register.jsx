import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register({ announcements }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        lastname: '',
        name: '',
        uname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest announcements={announcements}>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <div className="p-12 mt-9 mb-9 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7 text-2xl">
            <a href="/login/google">Googleアカウントでログイン</a>
            </div>

            <form className="p-6 mt-5 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7" onSubmit={submit}>

                <div>
                    <Label className="mt-5 mb-3 text-2xl text-title-purple1" forInput="lastname" value="氏" />

                    <Input
                        type="text"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="lastname"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label className="mt-5 mb-3 text-2xl text-title-purple1" forInput="name" value="名" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div>
                    <Label className="mt-5 mb-3 text-2xl text-title-purple1" forInput="uname" value="ユーザー名" />

                    <Input
                        type="text"
                        name="uname"
                        value={data.uname}
                        className="mt-1 block w-full"
                        autoComplete="uname"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label className="mt-5 mb-3 text-2xl text-title-purple1" forInput="email" value="メールアドレス" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label className="mt-5 mb-3 text-2xl text-title-purple1" forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label className="mt-5 mb-3 text-2xl text-title-purple1" forInput="password_confirmation" value="パスワード（確認）" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-lg text-gray-600 hover:text-gray-900">
                        会員の方はこちら
                    </Link>

                    <Button className="ml-4 text-lg bg-my-purple3" processing={processing}>
                        登録
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
