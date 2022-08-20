<?php

namespace App\Http\Controllers;
use App\Http\Requests\ProfileRequest;
use App\Models\{User, Review, Image, Contact};
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index(User $user)
    {
        $auth = auth()->user();
        $authId = auth()->id();
        $myReviews = Review::with('user')->where('user_id', $authId)->get();
        $myVenues = $auth->likeVenues()->get();

        $myBookmarks = $auth->bookmarkReviews()->get();
        return Inertia::render('Mypage/Index',['myReviews' => $myReviews, 'myBookmarks' => $myBookmarks, 'myVenues' => $myVenues]);
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
        if(isset($image)){
        $path = Storage::disk('s3')->put('icon', $image, 'public');
        $user->image_path = Storage::disk('s3')->url($path); // アップロードした画像のフルパスを取得
         }
        $user->save();

        return redirect('mypage/profile/' . $user->id);
    }


    public function store(ProfileRequest $request, User $user)
    {
        $input = $request['user'];
        $user->fill($input)->save();
        return redirect('mypage/profile/' . $user->id);
    }

    // public function contact()
    // {
    //     return Inertia::render('Contacts/Index');
    // }

    // public function storeContacts(Request $request, Contact $contact)
    // {
    //     $input = $request->all(); //$requestがformで送られてきたやつ
    //     $contact->fill($input)->save();
    //     // return Inertia::render('Contacts/Result');
    //     redirect('/');
    // }
}
