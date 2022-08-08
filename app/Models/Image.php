<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    //use HasFactory;
    
    public function review()   //image1 対 review多
    {
    return $this->belongsTo(Review::class);
    }

    public function store($images,$new_reviewId)
    {
        dd($images);
        //Storage::disk('s3')->
        //dd(count($images)); //null
        foreach ( $images as $image) {
            $path = Storage::disk('s3')->putFile('reviewImages', $image, 'public');
            $url = Storage::disk('s3')->url($path);
            $this->create([
                "review_id" => $new_reviewId, "image_path" => $url,
            ]);
        }
    }

    protected $fillable = [
        'review_id',
        'image_path',
    ];

    public function getImage()
    {

    }
}
