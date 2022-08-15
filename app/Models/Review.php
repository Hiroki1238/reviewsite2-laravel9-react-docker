<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Review extends Model
{
    //use HasFactory;
    use SoftDeletes;
    
    public function user()   //riview1 対 user1
    {
    return $this->belongsTo(User::class);
    }

    public function venue()   //riview1 対 venue1
    {
    return $this->belongsTo(Venue::class);
    }

    public function images()   //riview1 対 image1 //?
    {
    return $this->hasMany(Image::class);
    }

    public function bookmarkedUsers()  //中間テーブル
    {
    return $this->belongsToMany(User::class,'bookmarks','review_id','user_id');
    }
    
    protected $fillable = [
        'id',
        'user_id',
        'title',
        'body',
        'seat',
        'star1',
        'star2',
        'star3',
        'venue_id',
        'visited_at',
        'created_at',
        'updated_at',
    ];

    public function storeReview($input) //Review::store($input);のような呼び出し方をするときはstaticが必要
    {
        // $input += ['venue_id' => $venue_id];
        $this->fill($input)->save(); // $review-> と Review:: は同じ意味  ,  $this と self:: は同じ意味
        $new_reviewId = $this->latest()->first()->id; //created_atを新しい順に並び替えて一番最新の一つを持ってくる
        return $new_reviewId;
    }

    public function getByLimit($limit_count) //ここで一ページあたりの表示件数を指定する
    {
    // updated_atで降順に並べたあと、limitで件数制限をかける
    //return $this->orderBy('updated_at', 'DESC')->limit($limit_count)->get();
    return $this->with('venue')->orderBy('updated_at', 'DESC')->limit($limit_count)->get();
    }

    public function getByLimitAndPeginate(int $limit_count = 10) //ここで一ページあたりの表示件数を指定する
    {
    // updated_atで降順に並べたあと、limitで件数制限をかける
    //return $this->orderBy('updated_at', 'DESC')->limit($limit_count)->get();
    return $this->orderBy('updated_at', 'DESC')->paginate($limit_count);
    }
    

    public function getByLimitDESC(int $limit_count = 10)
    {
    return $this->orderBy('updated_at', 'DESC')->paginate($limit_count);
    }

    public function getByLimitASC(int $limit_count = 10)
    {
    return $this->orderBy('updated_at', 'ASC')->paginate($limit_count);
    }
}
