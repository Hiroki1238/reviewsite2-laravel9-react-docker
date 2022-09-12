<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\{User,Announcement};
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Auth,Hash};
use Illuminate\Validation\Rules;
use Inertia\Inertia;

//このコントローラーがRegister.jsxを表示している
class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create(Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        return Inertia::render('Auth/Register',['announcements' => $announcements]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'lastname' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'uname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'lastname' => $request->lastname,
            'name' => $request->name,
            'uname' => $request->uname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect('/');
        //return redirect('RouteServiceProvider::HOME');
    }
}
