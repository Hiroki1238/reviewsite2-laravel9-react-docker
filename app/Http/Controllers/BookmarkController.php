<?php

namespace App\Http\Controllers;
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
}
