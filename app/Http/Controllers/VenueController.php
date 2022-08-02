<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Venue;
use App\Models\Review;
use Inertia\Inertia;

class VenueController extends Controller
{
    public function showReview(Venue $venue) //今いるページの会場idをもつレビューを表示する
    {
        $venue_id = $venue->id;
        $reviews = Review::with('venue')->where('venue_id',$venue_id)->get();
        $prefecture = $venue->prefecture()->get()[0]; //書き方かえたい
        //return view('venues/show')->with(['reviews' => $reviews,'prefecture' => $prefecture, 'venue' => $venue]);  
        return Inertia::render('Venues/Show',['reviews' => $reviews,'prefecture' => $prefecture, 'venue' => $venue]);
    }

    // public function show(Review $review)
    // {
    //     //dd($review);
    //     return  view('reviews/show')->with(['review' => $review]);

    // }
}
