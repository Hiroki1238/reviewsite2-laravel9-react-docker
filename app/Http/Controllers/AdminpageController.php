<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Venue;
use Inertia\Inertia;

class AdminpageController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Index');
    }

    public function AddVenue(){
        return Inertia::render('Admin/AddVenue');
    }

    public function StoreVenue(Request $request, Venue $venue){
        //dd($request);
        $input = $request->all(); //$requestがformで送られてきたやつ
        $venue->fill($input)->save();
        return redirect("/admin/home");
    }

    public function SelectVenue(Venue $venue){
        return Inertia::render('Admin/SelectVenue',['venue' => $venue]);
    }

    public function EditVenue(Venue $venue){
        return Inertia::render('Admin/EditVenue',['venue' => $venue]);
    }

    public function DeleteVenue(){
        return Inertia::render('Admin/DeleteVenue');
    }

    public function DeleteReview(){
        return Inertia::render('Admin/DeleteReview');
    }

    public function ReplyToMessage(Contact $contact){
        $contacts = $contact->orderBy('created_at', 'ASC')->get();
        return Inertia::render('Admin/ReceivedMessage', ['contacts' => $contacts]);
    }

    public function Reply(Contact $contact){
        return Inertia::render('Admin/Reply', ['targetContact' => $contact]);
    }
}
