<?php

namespace App\Http\Controllers;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contacts/Index');
    }

    public function storeContacts(Request $request, Contact $contact)
    {
        $input = $request->all(); //$requestがformで送られてきたやつ
        $contact->fill($input)->save();
        // return Inertia::render('Contacts/Result');
        return Inertia::render('Contacts/Result');
    }

    public function result()
    {
        return Inertia::render('Contacts/Result');
    }
}
