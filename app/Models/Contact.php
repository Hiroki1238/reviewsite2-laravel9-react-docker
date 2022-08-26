<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Contact extends Model
{
    //use HasFactory;

    public function user()   //1対多
    {
    return $this->belongsTo(User::class);
    }

    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('Y/m/d'); //ブラウザ上の表示がこの形式になるだけで、データベースには影響しない
    }

    protected $fillable = [
        'id',
        'user_id',
        'user_email',
        'title',
        'body',
        'created_at',
    ];
}
