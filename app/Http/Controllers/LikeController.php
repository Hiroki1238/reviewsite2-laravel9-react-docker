<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function index(Request $request) {

        // return view('like.index')->with('ip', $request->ip());
        return Inertia::render('Likes/Index');

    }

    public function store($venueId)
    {
        Auth::user()->like($venueId);
        return redirect('/prefectures/venues/'. $venueId);
    }

    public function destroy($venueId)
    {
        Auth::user()->unlike($venueId);
        return back();
    }

    //いいね一覧を表示したい
    public function likeVenueList()
    {
        $auth = auth();
        $auth->likeVenueList($auth->id);
    }

}