<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prefecture;
use App\Models\Venue;
use Inertia\Inertia;

class PrefectureController extends Controller
{
    public function index(Prefecture $prefecture)
    {
        
        //return view('prefectures/index')->with(['region' => $region->prefecture_id]);  
        //return view('prefectures/index')->with(['prefectures' => $prefecture->getPrefecturesList()]);  
        return Inertia::render('Prefectures/Index',['prefecture_array' => $prefecture->getRegionList()]);
    }                                           

    public function show(Prefecture $prefecture)
    {
        $prefecture_id = $prefecture->id;
        $venues = Venue::with('prefecture')->where('prefecture_id',$prefecture_id)->get();
        return Inertia::render('Prefectures/Show',['venues' => $venues, 'prefecture' => $prefecture]);
        // return view('Prefectures/Show')->with(['venues' => $venues]);  
    }
    
}
