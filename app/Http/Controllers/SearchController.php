<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\{Prefecture, Venue, Announcement};

class SearchController extends Controller
{
    private $venue;

    public function __construct()
    {
        $this->venue = new Venue();
    }


    public function index(Prefecture $prefecture, Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        return Inertia::render('Search/Index', ['prefecture_array' => $prefecture->getRegionList(),  'announcements' => $announcements]);
    }

    public function searchWordAndCapacity(Request $request, Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        $word = $request->input('word');
        $capacity = $request->input('capacity');

        $capacityInteger = intval($capacity);
        if(isset($word) && $capacityInteger === 0)
                return Inertia::render('Search/Result', ['results' => $this->venue->searchByWord($word), 'announcements' => $announcements]);

        if(isset($word) && isset($capacityInteger)) 
                return Inertia::render('Search/Result', ['results' => $this->venue->searchByWordAndCapacity($word, $capacity), 'announcements' => $announcements]);

        if(isset($capacityInteger) && is_null($word)) 
                return Inertia::render('Search/Result', ['results' => $this->venue->searchByCapacity($capacity), 'announcements' => $announcements]);
    }


}
