<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Venue;

class SearchController extends Controller
{
    public function index()
    {
        return view('search/index');
    }

    public function searchWord(Request $request,Venue $venue) //requestを使わないとformから送られてきたデータを受け取れない
    {
        $word = $request->input('word');
        $result = Venue::where('name', 'LIKE', '%'.$word.'%')->get();
        return view('search/result')->with(['result' => $result]);
    }

    public function searchCapacity(Request $request,Venue $venue)
    {
        $capacity = $request->input('capacity');
        $result = Venue::where('scale_standing', '<' , $capacity)->get();
        return view('search/result')->with(['result' => $result]);
    }
}
