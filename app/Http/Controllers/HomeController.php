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
        $announcements = $announcement->orderBy('created_at', 'DESC')->get();
        $reviews = $review->getByLimit(5);
        $review_images = $image->get();

        // for ($i = 0; $i < count($review_images); $i++) {
        //     if ($review_images[$i]->review_id == $review_images[$i + 1]->review_id) {
        //         $images_array = array_splice($review_images, 
        //         $i+1, 1);
        //     }
        // }
        

        return Inertia::render('Home/Index', ['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $reviews, 'review_images' => $review_images, 'images' => $images, 'announcements' => $announcements]); //新着のレビューをホームに表示、表示件数をここで指定
    }

    public function description(Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at', 'DESC')->get();
        return Inertia::render('Home/Description', ['announcements' => $announcements]); //新着のレビューをホームに表示、表示件数をここで指定
    }
}
