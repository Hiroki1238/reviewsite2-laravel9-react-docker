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
    public function index()
    {
      return Inertia::render('Bookmarks/Index');
    }

    public function store(Review $review, User $user) {
      $user = Auth();
      if (!$user->is_bookmark($review->id)) {
          $user->bookmarkReviews()->attach();
      }
      return back();
  }
  public function destroy($articleId) {
      $user = Auth();
      if ($user->is_bookmark($articleId)) {
          $user->bookmarkReviews()->detach($articleId);
      }
      return back();
  }

  public function bookmark_reviews()
    {
        $articles = Auth()->bookmarkReviews()->orderBy('created_at', 'desc')->paginate(10);
        $data = [
            'reviews' => $reviews,
        ];
        return Inertia::render('Mypage/Bookmarks', $data);
    }
}
