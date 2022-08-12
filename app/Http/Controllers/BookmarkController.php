<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Review;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BookmarkController extends Controller
{
    public function index(Request $request, User $user) {
        $auth = auth()->user();
        $myBookmarks = $auth->bookmarkReviews()->get();
        return Inertia::render('Bookmarks/Index',['myBookmarks' => $myBookmarks]);
    }

    public function store($reviewId)
    {
        Auth::user()->bookmark($reviewId);
        return redirect('/reviews/'. $reviewId);
    }

    public function destroy($reviewId)
    {
        Auth::user()->notBookmark($reviewId);
        return back();
    }
}
