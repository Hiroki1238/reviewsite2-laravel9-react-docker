<?php

namespace App\Http\Controllers;
use App\Models\{Contact, Announcement};
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        return Inertia::render('Contacts/Index',['announcements' => $announcements]);
    }

    public function storeContacts(Request $request, Contact $contact, Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        $input = $request->all(); //$requestがformで送られてきたやつ
        $contact->fill($input)->save();
        // return Inertia::render('Contacts/Result');
        return Inertia::render('Contacts/Sent',['announcements' => $announcements]);
    }

    // public function sent()
    // {
    //     return Inertia::render('Contacts/Sent');
    // }
}
