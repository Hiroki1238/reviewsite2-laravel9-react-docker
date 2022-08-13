<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Venue;
use App\Models\Prefecture;

class SearchController extends Controller
{
    private $venue;

    public function __construct()
    {
        $this->venue = new Venue();
    }


    public function index(Prefecture $prefecture)
    {
        return Inertia::render('Search/Index', ['prefecture_array' => $prefecture->getRegionList()]);
    }

    public function searchWord(Request $request)
    {
        $word = $request->input('word');
        $capacity = $request->input('capacity');

        $capacityInteger = intval($capacity);
        if(isset($word) && $capacityInteger === 0)
                return Inertia::render('Search/Result', ['results' => $this->venue->searchByWord($word)]);

        if(isset($word) && isset($capacityInteger)) 
                return Inertia::render('Search/Result', ['results' => $this->venue->searchByWordAndCapacity($word, $capacity)]);

        if(isset($capacityInteger) && is_null($word)) 
                return Inertia::render('Search/Result', ['results' => $this->venue->searchByCapacity($capacity)]);
    }


}
