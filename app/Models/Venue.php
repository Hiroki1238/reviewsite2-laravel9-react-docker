<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{

    //use HasFactory;
    public function reviews()   //venue1 対 review多
    {
    return $this->hasMany(Review::class);
    }

    public function prefecture()   //venue1 対 prefecture1
    {
    return $this->belongsTo(Prefecture::class);
    }

    public function users()   //venue 多 対 user多
    {
    return $this->belongsToMany(User::class);
    }

    public function getVenueReviewList()
    {
    return $this->orderBy('id', 'ASC')->get(); //表示の際review_id順に並べる
    }

    public function likeddUsers() //中間テーブル
    {
    return $this->belongsToMany(User::class,'likes','venue_id','user_id');
    }

    public function images()
    {
        return $this->hasManyThrough(Image::class, Review::class);
    }

    // Venue verb 
    // venue is Searched By Capacity
    public function searchByWord( $word = null )
    {
        return Venue::where('name', 'LIKE', '%' . $word . '%')->get();
    }

    public function searchByCapacity( $capacity = null )
    {
        $capacityInteger = intval($capacity);

        return match( true ) {
            $capacityInteger < 10000 => Venue::whereBetween( 'scale_standing',[$capacityInteger - 1000, $capacityInteger])->get(),
            10000 <  $capacityInteger  &&  $capacityInteger  < 30000 => Venue::whereBetween('scale_standing', [$capacityInteger - 5000, $capacityInteger])->get(),
            default => Venue::where('scale_standing', '>=' , $capacityInteger)->get()
        };
    }

    public function searchByWordAndCapacity( $word = null, $capacity = null )
    {
        $capacityInteger = intval($capacity);

        return match(isset($word) && isset($capacity)){
            $capacity <= 10000 => Venue::whereBetween( 'scale_standing',[$capacityInteger - 1000, $capacityInteger])->where('name', 'LIKE', '%' . $word . '%')->get(),
            10000< $capacity && $capacity <= 30000 => Venue::whereBetween('scale_standing', [$capacityInteger - 5000, $capacityInteger])->where('name', 'LIKE', '%' . $word . '%')->get(),
            default => Venue::where('scale_standing', '>=' , $capacityInteger)->where('name', 'LIKE', '%' . $word . '%')->get()
        };
    }

    protected $fillable = [
        'name',
        'keyword',
        'scale_standing',
        'scale_sitting',
        'location_path',
        'address',
        'prefecture_id',
        'url',
        'created_at',
        'updated_at',
    ];
}
