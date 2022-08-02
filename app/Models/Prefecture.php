<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Region;

class Prefecture extends Model
{
    //use HasFactory;

//venueに対するリレーション
public function venues()   //prefecture1 対 venue多
{
    return $this->hasMany(Venue::class);
}

    public function getPrefecturesList()
    {
    return $this->orderBy('id', 'ASC')->get(); //表示の際prefecture_id順に並べる
    }

    public function getRegionList()
    {
    $region = new Region;
     $prefectures = array();
     $regions = $region->get();

     foreach($regions as $region){                //prefecturesは配列 中身複数
        $region_prefecture = ['region' => $region->name, 'prefectures' => $this->where('region_id',$region->id)->get()];
        array_push($prefectures,$region_prefecture);
     }
     return $prefectures;
    }

    // public function hokkaido()
    // {
    // return $this->where("region", 1)->get();
    // }

    // public function tohoku()
    // {
    // return $this->orderBy('id', 'ASC')->where("region" == 2)->get();
    // }

    // public function kanto()
    // {
    // return $this->orderBy('id', 'ASC')->where($this->region == 3)->get();
    // }

    // public function chubu()
    // {
    // return $this->orderBy('id', 'ASC')->where($this->region == 4)->get();
    // }

    // public function kinki()
    // {
    // return $this->orderBy('id', 'ASC')->where($this->region == 5)->get();
    // }

    // public function chugoku()
    // {
    // return $this->orderBy('id', 'ASC')->where($this->region == 6)->get();
    // }

    // public function shikoku()
    // {
    // return $this->orderBy('id', 'ASC')->where($this->region == 7)->get();
    // }

    // public function kyushu()
    // {
    // return $this->orderBy('id', 'ASC')->where($this->region == 8)->get();
    // }

}
