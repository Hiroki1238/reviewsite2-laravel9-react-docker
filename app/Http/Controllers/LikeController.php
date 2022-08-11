<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LikeController extends Controller
{
    public function index(Request $request) {

        // return view('like.index')->with('ip', $request->ip());
        return Inertia::render('Like.Index');

    }

    public function store($venueId)
    {
        Auth()->user->like($venueId);
        return 'stored!';
    }

    public function destroy($venueId)
    {
        Auth()->user->unlilike($venueId);
        return 'destroied!';
    }
}