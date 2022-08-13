<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\User;
use App\Models\Review;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;
//use Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    //以下のindexメソッドでは、User $userとした上でwith(['user' => $user])をつけることにより、mypage/indexにuserの情報が渡せている。viewにデータを渡したいときはこういう書き方をしなければならない。
    public function index(User $user)
    {
        $authId = auth()->id();
        $myReviews = Review::with('user')->where('user_id', $authId)->get();
        return Inertia::render('Mypage/Index',['myReviews' => $myReviews]);
    }


    public function show(User $user)
    {
        return Inertia::render('Mypage/Show',['user' => $user]);
    }


    public function edit(User $user)
    {
        return Inertia::render('Mypage/Edit'); //authの中身で事足りるから['user' => $user]を渡すのをやめてみた
    }


    public function update(Request $request, User $user)
    {
        $form = $request->all(); //入力された情報全て受け取ってる
        $image = $request->file('image');
        $user->fill($form);
        $path = Storage::disk('s3')->put('icon', $image, 'public');
        $user->image_path = Storage::disk('s3')->url($path); // アップロードした画像のフルパスを取得
        $user->save();

        return redirect('mypage/profile/' . $user->id);
    }


    public function store(ProfileRequest $request, User $user)
    {
        $input = $request['user'];
        $user->fill($input)->save();
        return redirect('mypage/profile/' . $user->id);
    }

    public function contact()
    {
        return Inertia::render('Contacts/Index');
    }
}
