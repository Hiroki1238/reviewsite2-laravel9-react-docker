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
        //return view('reviews/index')->with(['reviews' => $review->get()]);  
        //return view('reviews/index')->with(['reviews' => $review->getByLimitDESC()]); //取得する数に制限をかける   
        return Inertia::render('Reviews/Index',['reviews' => $review->getByLimit()]);
    }

    public function show(Review $review,Image $image, User $user) //reviews/3の時$reviewsに3がid=3のreviewsテーブルを持ってくる、それが$reviesに入ってくる $review->idとすると3が取得できる
    {
        //$venue = Venue::find(1);
        $review = Review::with('venue')->find($review->id); //showのルーティングは/reviews/{review}となっていて、reviewの値を渡せている
        $images = $image->where('review_id',$review->id)->get();
        $boolean = $user->bookmarkStatus($review->id);
        return Inertia::render('Reviews/Show',['review' => $review, 'images' => $images, 'isBookmarked' => $boolean]);
    }

    // public function create(Venue $venue,Request $request,Review $review)
    // {
    //     $form = $request->all(); //入力された情報全て受け取ってる
    //     $image = $request->file('image');
    //     unset($form['_token']); // @csrfを除外する
    //     $review->fill($form);

    //     $disk = Storage::disk('s3');
    //     $images = $request->file('item_url');
    //     foreach ( $images as $image) {
    //         $path = $disk->put('itemImages', $image, 'public');
    //         $url[] = $disk->url($path);
    //     }
    //     return view('reviews/create')->with(['venue' => $venue]);
    // }

    public function create(Venue $venue)
    {
        // return view('reviews/create')->with(['venue' => $venue]);
        return Inertia::render('Reviews/Create',['venue' => $venue]);
    }

    public function getVenueName(Venue $venue)
    {
        // return view('Review/create')->with(['venue_name' => $venue->name]);
        return Inertia::render('Review/Create',['venueId',$venue->id]);
    }

    //後でReviewRequestに直す
    public function store(Request $request, Venue $venue,Review $review, Image $image){
        $input = $request->all();
        $images = $request->file('images');
        $new_reviewId = $review->storeReview($input); //Review.phpのstoreImageを使う、今新しく作られたレビューのidを持ってきてる
        //ここの段階で写真以外は保存済み
        $image->storeImage($images,$new_reviewId);//imagesテーブルにreview_idを渡す
        //dd($review->venue_id);
    return redirect('prefectures/venues/'.$review->venue_id);
    }

    public function edit(Review $review)
    {
        // return view('reviews/edit')->with(['review' => $review]);
        return Inertia::render('Reviews/Edit',['review' => $review]);
    }

    //後でReveiwRequestに直す
    public function update(Request $request, Review $review)
    {
        $input_review = $request->all();
        //dd($input_review);
        $review->fill($input_review)->save();

        return redirect('/reviews/' . $review->id);
    }

    public function delete(Review $review)
    {
        $review->delete();
        return redirect('/reviews');
    }
    
}
