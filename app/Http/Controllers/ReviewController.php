<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Models\Review;
use App\Models\Venue;
use App\Models\User;
use App\Models\Image;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Storage;
use Storage;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function index(Review $review)
    {
        return Inertia::render('Reviews/Index',['reviews' => $review->getByLimitAndPeginate()]);
    }

    public function show(Review $review,Image $image, User $user) //reviews/3の時$reviewsに3がid=3のreviewsテーブルを持ってくる、それが$reviesに入ってくる $review->idとすると3が取得できる
    {
        $review = Review::with('venue')->find($review->id); //showのルーティングは/reviews/{review}となっていて、reviewの値を渡せている
        $images = $image->where('review_id',$review->id)->get();
        $boolean = $user->bookmarkStatus($review->id);
        return Inertia::render('Reviews/Show',['review' => $review, 'images' => $images, 'isBookmarked' => $boolean]);
    }

    public function create(Venue $venue)
    {
        return Inertia::render('Reviews/Create',['venue' => $venue]);
    }

    public function getVenueName(Venue $venue)
    {
        return Inertia::render('Review/Create',['venueId',$venue->id]);
    }

    //後でReviewRequestに直す
    public function store(Request $request, Venue $venue,Review $review, Image $image){
        $input = $request->all();
        $images = $request->file('images');
        $new_reviewId = $review->storeReview($input); //Review.phpのstoreImageを使う、今新しく作られたレビューのidを持ってきてる
        //ここの段階で写真以外は保存済み
        $image->storeImage($images,$new_reviewId);//imagesテーブルにreview_idを渡す
    return redirect('/prefectures/venues/'.$review->venue_id);
    }

    public function edit(Review $review)
    {
        return Inertia::render('Reviews/Edit',['review' => $review]);
    }

    //後でReveiwRequestに直す
    public function update(Request $request, Review $review)
    {
        $input_review = $request->all();
        $review->fill($input_review)->save();

        return redirect('/reviews/' . $review->id);
    }

    public function delete(Review $review)
    {
        $review->delete();
        return redirect('/reviews');
    }
    
}
