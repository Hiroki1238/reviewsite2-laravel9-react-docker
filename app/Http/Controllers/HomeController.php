<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Contact, Prefecture, Review, Image, Announcement};
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Prefecture $prefecture, Review $review, Image $image, Announcement $announcement)
    {
        $images = Image::inRandomOrder()->take(16)->get(); //take()でランダムに取ってくる枚数を指定
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        return Inertia::render('Home/Index',['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $review->getByLimit(5), 'images' => $images, 'announcements' => $announcements]); //新着のレビューをホームに表示、表示件数をここで指定
    }
}
