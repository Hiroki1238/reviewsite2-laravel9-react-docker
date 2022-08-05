<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\User;
use App\Models\Review;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    //以下のindexメソッドでは、User $userとした上でwith(['user' => $user])をつけることにより、mypage/indexにuserの情報が渡せている。viewにデータを渡したいときはこういう書き方をしなければならない。
    public function index(User $user)
    {
        $authId = auth()->id();
        $myReviews = Review::with('user')->where('user_id', $authId)->get();
        // return view('mypage/index')->with(['my_reviews' => $my_reviews]);
        return Inertia::render('Mypage/Index',['myReviews' => $myReviews]);
    }

    public function show(User $user)
    {
        // return view('mypage/show')->with(['user' => $user]);
        return Inertia::render('Mypage/Show',['user' => $user]);
    }

    public function edit(User $user)
    {
        // return view('mypage/edit')->with(['user' => $user]);
        return Inertia::render('Mypage/Edit',['user' => $user]);
    }

    public function update(ProfileRequest $request, User $user)
    {
        $input_user = $request->all();
        $user->fill($input_user)->save();
        return redirect('mypage/profile/' . $user->id);
    }

    public function store(ProfileRequest $request, User $user)
    {
        $input = $request['user'];
        $user->fill($input)->save();
        return redirect('mypage/profile/' . $user->id);
    }

    public function create(Request $request, User $user)
    {
        $auth_id = auth()->id();
        //$user = User::find($auth_id);
        $form = $request->all(); //入力された情報全て受け取ってる
        $image = $request->file('image');
        unset($form['_token']); // @csrfを除外する
        $user->fill($form);

        // バケットの「icon」フォルダへアップロード
        if ($request->image !== null) {
            $path = Storage::disk('s3')->put('icon', $image, 'public');
            $user->image_path = Storage::disk('s3')->url($path); // アップロードした画像のフルパスを取得
        } elseif ($request->image == null && $form['image_path'] !== "") {
            $user->image_path = $form['image_path'];
        }
        $user->save();

        return redirect('mypage/profile/' . $auth_id);
    }
}
