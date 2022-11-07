
import React, { useState } from 'react';

export default function ChatForm({ user, sendMessage }) {
    const [newMessage, setNewMessage] = useState('');

    // メッセージの更新
    const handleChange = event => {
        setNewMessage(event.target.value);
    }

    // エンターを押されたら送信処理
    const keyDown = event => {
        if (event.key !== 'Enter') return false;
        event.preventDefault();
        sendMessage(newMessage);
        setNewMessage("")
    }

    return (
        <div class="text-center">
            <textarea
                class="border-0 border-white w-full"
                placeholder="メッセージを入力"
                value={newMessage}
                onChange={handleChange}
                onKeyPress={keyDown}
            />
        </div>
    );
}
