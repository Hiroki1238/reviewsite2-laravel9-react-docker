<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Venue;
use App\Models\Prefecture;

class SearchController extends Controller
{
    public function index(Prefecture $prefecture)
    {
        return Inertia::render('Search/Index',['prefecture_array' => $prefecture->getRegionList()]);
    }    

    public function searchWord($word) //requestを使わないとformから送られてきたデータを受け取れない
    {
        //$word = $request->input('word');
        $results = Venue::where('name', 'LIKE', '%'.$word.'%')->get();
        //dd($results);
        return Inertia::render('Search/Result',['results' => $results]);
    }

    public function searchCapacity(Request $request,Venue $venue)
    {
        $capacity = $request->input('capacity');
        $results = Venue::where('scale_standing', '<' , $capacity)->get();
        return Inertia::render('Search/Result',[
            ['results' => $results]
        ]);
    }
}
