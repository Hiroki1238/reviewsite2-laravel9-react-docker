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

    public function storeImage($images, $new_reviewId)
    {
        //Storage::disk('s3')->
        //dd(count($images)); //null
        if ($images != null) {
            foreach ($images as $image) {
                $path = Storage::disk('s3')->putFile('reviewImages', $image, 'public');
                $url = Storage::disk('s3')->url($path);
                $this->create([
                    "review_id" => $new_reviewId, "image_path" => $url,
                ]);
            }
        }
    }

    // public function getReviewImages()
    // {
    //     $review_images = [];
    //     $images = $this->get();
    //     for ($i = 0; $i < count($images); $i++) {
    //         $review_images[] = $images[$i];
    //         if ($images[$i]->review_id == $images[$i + 1]->review_id) {
    //             break;
    //         }
    //     }
    //}

    protected $fillable = [
        'review_id',
        'image_path',
    ];
}
