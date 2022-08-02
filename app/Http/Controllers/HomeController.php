<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prefecture;
use App\Models\Review;

class HomeController extends Controller
{
    public function index(Prefecture $prefecture, Review $review)
    {
        return view('home/index')->with(['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $review->getByLimit(5)]);
    }
}
