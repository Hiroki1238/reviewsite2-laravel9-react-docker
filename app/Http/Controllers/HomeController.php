<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prefecture;
use App\Models\Review;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Prefecture $prefecture, Review $review)
    {
        return Inertia::render('Home/Index',['prefecture_array' => $prefecture->getRegionList(), 'reviews' => $review->getByLimit(5)]);
    }
}
