<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Post $post)
    {
        return Inertia::render("Post/Index", ["posts" => $post->get()]); //カッコ内はresources/js/Pages以降のパスを指定
    }

    public function show(Post $post)
    {
        //dd($post);
        return Inertia::render("Post/Show", ["post" => $post]);
    }

    public function create()
    {
        return Inertia::render("Post/Create");
    }

    public function store(Request $request, Post $post)
    {
        $input = $request->all(); //$requestがformで送られてきたやつ
        $post->fill($input)->save();
        return redirect("/posts/".$post->id);

    }
}
