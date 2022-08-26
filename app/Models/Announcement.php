<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface; //ブラウザ上でのtimestampsの表記を変更

class Announcement extends Model
{
    //use HasFactory;

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

    /**
     * 配列/JSONシリアル化の日付を準備
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('Y.m.d'); //ブラウザ上の表示がこの形式になるだけで、データベースには影響しない
    }
}
