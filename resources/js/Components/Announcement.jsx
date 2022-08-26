import React from "react";

const Announcement = ({ announcements }) => {
    return (
        <div className="p-6 mt-6 shadow-lg shadow-shadowgray1 bg-gray-200 my-0 mx-auto rounded-lg border border-gray-300 text-center w-5/7">
            <h3 className="text-title-purple1 text-3xl mb-8">お知らせ</h3>
            {announcements.map((announcement) => (
                <div key={announcement.id}>
                  <p className="text-lg">{announcement.created_at}</p>
                    <h1 className="text-2xl mb-2">{announcement.title}</h1>
                    <p className="text-xl">{announcement.body}</p>
                    <hr className="border-gray-400 mt-5 mb-5" />
                </div>
            ))}
        </div>
    );
};

export default Announcement;
