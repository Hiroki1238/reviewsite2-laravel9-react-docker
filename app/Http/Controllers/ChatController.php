<?php

namespace App\Http\Controllers;

use App\Models\Message;  // 追記
use Illuminate\Support\Facades\Auth;  // 追記
use App\Models\Announcement;
use Illuminate\Http\Request;
use App\Events\MessageSent;
use Inertia\Inertia;

class ChatController extends Controller
{
    // メッセージの取得
    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    public function showMessages(Announcement $announcement)
    {
        $announcements = $announcement->orderBy('created_at','DESC')->get();
        return Inertia::render('Chats/Chats', ['announcements'=>$announcements]);
    }

    // メッセージ送信
    public function sendMessage(Request $request)
    {
        $user = Auth::user();
        $message = $user->messages()->create([ // DBにメッセージを保存
            'message' => $request['message']
        ]);
        broadcast(new MessageSent($user, $message))->toOthers(); //追記
    }
}