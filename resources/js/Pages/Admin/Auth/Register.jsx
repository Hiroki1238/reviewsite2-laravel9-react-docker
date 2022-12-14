import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
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
    
        post(route('admin.register'));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>

                <div>
                    <Label forInput="lastname" value="氏" />

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
                    <Label forInput="name" value="名" />

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
                    <Label forInput="uname" value="ユーザー名" />

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
                    <Label forInput="email" value="メールアドレス" />

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
                    <Label forInput="password" value="パスワード" />

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
                    <Label forInput="password_confirmation" value="パスワード（確認）" />

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
                    <Link href={route('admin.login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        一般ユーザーのログインはこちら
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        管理者登録
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
