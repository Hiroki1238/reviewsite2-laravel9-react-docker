<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminpageController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Index');
    }

    public function venue(){
        return Inertia::render('Admin/AdminVenue');
    }
}
