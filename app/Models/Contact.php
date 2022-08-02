<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    //use HasFactory;

    public function user()   //1対多
    {
    return $this->belongsTo(User::class);
    }
}
