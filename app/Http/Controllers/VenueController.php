<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Venue,User, Review, Image};
use Inertia\Inertia;

class VenueController extends Controller
{
    public function show(Venue $venue, User $user) //今いるページの会場idをもつレビューを表示する
    {
        $venue_id = $venue->id;
        $reviews = Review::with('venue')->where('venue_id',$venue_id)->get();
        $prefecture = $venue->prefecture()->get()[0]; //書き方かえたい
        $boolean = $user->LikeStatus($venue->id);
        return Inertia::render('Venues/Show',['reviews' => $reviews,'prefecture' => $prefecture, 'venue' => $venue, 'isLiked' => $boolean]);
    }

    public function picture(Venue $venue)
    {
        return Inertia::render('Venues/Picture',['images' => $venue->images]);
    }

}
