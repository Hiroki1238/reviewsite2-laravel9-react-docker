<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Models\Review;
use App\Models\Venue;
use App\Models\User;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ReviewController extends Controller
{
    public function index(Review $review)
    {
        //return view('reviews/index')->with(['reviews' => $review->get()]);  
        return view('reviews/index')->with(['reviews' => $review->getByLimitDESC()]); //取得する数に制限をかける   
    }

    public function show(Review $review,Image $image) //reviews/3の時$reviewsに3がid=3のreviewsテーブルを持ってくる、それが$reviesに入ってくる $review->idとすると3が取得できる
    {
        //$venue = Venue::find(1);
        $review = Review::with('venue')->find($review->id); //showのルーティングは/reviews/{review}となっていて、reviewの値を渡せている
        $images = $image->where('review_id',$review->id)->get();
        //dd($images);
        return view('reviews/show')->with(['review' => $review,'images' => $images]);
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
        return view('reviews/create')->with(['venue' => $venue]);
    }

    public function getVenueName(Venue $venue)
    {
        return view('Review/create')->with(['venue_name' => $venue->name]);
    }

    public function store(Venue $venue, ReviewRequest $request, Review $review, Image $image)
    {
        $input = $request['review'];
        $images = $request->file('item_url');
        $new_id = $review->store($input,$venue->id); //Reviewのstoreを使う
        $image->store($images,$new_id);
        return redirect('/reviews');
    }

    public function edit(Review $review)
    {
        return view('reviews/edit')->with(['review' => $review]);
    }

    public function update(ReviewRequest $request, Review $review)
    {
        $input_review = $request['review'];
        $review->fill($input_review)->save();

        return redirect('/reviews/' . $review->id);
    }

    public function delete(Review $review)
    {
        $review->delete();
        return redirect('/reviews');
    }
}
