<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Prefecture, Review, Image};
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Prefecture $prefecture, Review $review, Image $image)
    {
        $images = Image::inRandomOrder()->take(16)->get(); //take()でランダムに取ってくる枚数を指定
        return Inertia::render('Home/Index',['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $review->getByLimit(5), 'images' => $images]); //新着のレビューをホームに表示、表示件数をここで指定
    }
}
