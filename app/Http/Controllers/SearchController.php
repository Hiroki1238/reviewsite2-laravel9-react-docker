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

    public function searchWord(Request $request,Venue $venue) //requestを使わないとformから送られてきたデータを受け取れない
    {
        $word = $request->input('word');
        $result = Venue::where('name', 'LIKE', '%'.$word.'%')->get();
        // return view('search/result')->with(['result' => $result]);
        return Inertia::render('Serarch/Result',[
            ['result' => $result]
        ]);
    }

    public function searchCapacity(Request $request,Venue $venue)
    {
        $capacity = $request->input('capacity');
        $result = Venue::where('scale_standing', '<' , $capacity)->get();
        return Inertia::render('Serarch/Result',[
            ['result' => $result]
        ]);
    }
}
