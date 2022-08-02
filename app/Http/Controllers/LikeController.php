<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Review;

class LikeController extends Controller
{
    public function index()
    {
        return view('likes/index');
    }
}
