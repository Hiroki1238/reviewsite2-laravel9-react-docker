<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Prefecture, Review, Image};
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Prefecture $prefecture, Review $review, Image $image)
    {
        //ホームのスライドショー用の写真が取ってこれない 'images', $image->image_path->get()
        return Inertia::render('Home/Index',['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $review->getByLimit(5)]); //新着のレビューをホームに表示、表示件数をここで指定
    }
}
