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

    public function likeVenues()   //中間テーブル
    {
    return $this->belongsToMany(Venue::class,'likes','user_id','venue_id');
    }

    public function bookmarkReviews()   //中間テーブル
    {
    return $this->belongsToMany(Review::class,'bookmarks','user_id','review_id');
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
