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
}
