import React from "react";

export default function ChatMessages({ auth_name, messages }) {
    return (
        <ul className="chat">
            {messages.map((message) => {
                const username = message.user.name;
                const mes = message.message;

                return (
                    <li className={username == auth_name ? "text-right"
                    :
                    "text-left"}>
                        <strong className="text-gray-500 font-black text-xl ml-2 mr-1">{username}</strong>
                        {/* <div className="mb-2 text-white">
                            <p className="bg-my-purple3 text-xl inline py-1 px-2 mb-2 rounded">{mes}</p>
                        </div> */}

                        <div className="mb-4 text-white"> {/* 自分の投稿のみ紫にする */}

                            <p className={username == auth_name ? "bg-my-purple3 text-2xl inline py-1 px-2 mb-2 rounded-xl shadow-md shadow-shadowgray1"
                            :
                            "bg-gray-500 text-2xl inline py-1 px-2 mb-2 rounded-xl shadow-md shadow-shadowgray1"}>
                                {mes}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
