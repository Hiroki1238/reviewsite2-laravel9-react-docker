<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    public function reviews()   //user1 対 review多
    {
    return $this->hasMany(Review::class);
    }

    public function contacts()   //user1 対 contact多
    {
    return $this->hasMany(Contact::class);
    }

    public function venues()   //user 多 対 venue多
    {
    return $this->belongsToMany(Venue::class);
    }

    public function bookmarkReviews()   //中間テーブル
    {
    return $this->belongsToMany(Review::class,'bookmarks','user_id','review_id');
    }

    public function likeVenues()   //中間テーブル
    {
    return $this->belongsToMany(Venue::class,'likes','user_id','venue_id');
    }

    //以下いいね機能
    public function LikeStatus($venueId)
    {
      //$this->with('venues')->wherePivot('venue_id',$venueId)->exists();
      return User::whereHas('likeVenues', function ($query) use($venueId) {
        $query->where('venue_id', $venueId);
       })->exists();    
    }

    //isLikeを使って、既にlikeしたか確認したあと、いいねする（重複させない）
    public function like($venueId)
    {
      if($this->LikeStatus($venueId)){
        //既にいいねしていたら(trueだったら)何もしない
      } else {
        $this->likeVenues()->attach($venueId);
      }
      //dd($venueId);
    }

    //isLikeを使って、既にlikeしたか確認して、もししていたら解除する
    public function unlike($venueId)
    {
      if($this->LikeStatus($venueId)){
        $this->likeVenues()->detach($venueId);  //もし既に「いいね」していたら消す
      }
    }



    //以下ブックマーク機能
    public function bookmarkStatus($reviewId)
    {
      return User::whereHas('bookmarkReviews', function ($query) use($reviewId) {
        $query->where('review_id', $reviewId);
       })->exists();    
    }

    public function bookmark($reviewId)
    {
      if($this->bookmarkStatus($reviewId)){
        //既にいいねしていたら(trueだったら)何もしない
      } else {
        $this->bookmarkReviews()->attach($reviewId);
      }
    }

    public function notBookmark($reviewId) //解除
    {
      if($this->bookmarkStatus($reviewId)){
        $this->bookmarkReviews()->detach($reviewId);  //もし既にブックマークしていたら消す
      }
    }
    

    protected $fillable = [
        'lastname',
        'name',
        'uname',
        'email',
        'password',
        'age',
        'profile',
        'image_path',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
