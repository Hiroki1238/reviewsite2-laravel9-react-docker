<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Venue,User, Review, Image, Announcement};
use Inertia\Inertia;

class VenueController extends Controller
{
    public function show(Venue $venue, User $user, Announcement $announcement) //今いるページの会場idをもつレビューを表示する
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        $venue_id = $venue->id;
        $reviews = Review::with('venue')->where('venue_id',$venue_id)->get();
        $prefecture = $venue->prefecture()->get()[0]; //書き方かえたい
        $boolean = $user->LikeStatus($venue->id);
        return Inertia::render('Venues/Show',['reviews' => $reviews,'prefecture' => $prefecture, 'venue' => $venue, 'isLiked' => $boolean, 'announcements' => $announcements]);
    }

    public function picture(Venue $venue, Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        return Inertia::render('Venues/Picture',['images' => $venue->images, 'announcements' => $announcements]);
    }

}
