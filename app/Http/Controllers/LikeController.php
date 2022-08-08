<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Venue;
use Inertia\Inertia;

class LikeController extends Controller
{
    public function index()
    {
        return Inertia::render('Likes/Index');
    }
}
