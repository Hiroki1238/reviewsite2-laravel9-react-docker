<?php

namespace App\Http\Controllers;
//use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Socialite;
use App\Models\User;

class LoginController extends Controller
{
    public function redirectToGoogle()
    {
        // Google へのリダイレクト
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $gUser = Socialite::driver('google')->stateless()->user(); // email が合致するユーザーを取得
        $user = User::where('email', $gUser->email)->first(); // 見つからなければ新しくユーザーを作成
        if ($user == null) {
            $user = $this->createUserByGoogle($gUser);
        }
        \Auth::login($user, true); // ログイン処理
        return redirect('/');
    }

    public function createUserByGoogle($gUser)
    {
        $user = User::create([
            'uname'     => $gUser->name,
            'lastname' => 'test_lastname',
            'name' => 'test_name',
            'email'    => $gUser->email,
            'password' => \Hash::make(uniqid()),
            //パスワードの初期値は uniqid() で適当に生成してハッシュ化していますが、本来であればよりセキュアな文字列を使った方がいいかと思われますのでご注意ください。

        ]);
        return $user;
    }
}
