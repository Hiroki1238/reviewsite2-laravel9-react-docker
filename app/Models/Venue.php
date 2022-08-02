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
}
