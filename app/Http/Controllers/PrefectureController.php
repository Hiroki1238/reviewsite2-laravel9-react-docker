<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Prefecture, Venue, Announcement};
use Inertia\Inertia;

class PrefectureController extends Controller
{
    public function index(Prefecture $prefecture, Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        return Inertia::render('Prefectures/Index',['prefecture_array' => $prefecture->getRegionList(), 'announcements' => $announcements]);
    }                                           

    public function show(Prefecture $prefecture, Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        $prefecture_id = $prefecture->id;
        $venues = Venue::with('prefecture')->where('prefecture_id',$prefecture_id)->get();
        return Inertia::render('Prefectures/Show',['venues' => $venues, 'prefecture' => $prefecture, 'announcements' => $announcements]);
    }
    
}
