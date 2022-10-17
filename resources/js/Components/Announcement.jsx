import React from "react";

const Announcement = ({ announcements }) => {
    return (
        <div className="w-1/8 text-left text-xl text-title-gray">
                    <div className="text-3xl mt-4 pt-1 text-title-gray">
                        お知らせ
                    </div>
                    {announcements.map((announcement) => {
                        return (
                            <div key={announcement.title}>
                                <p className="mt-3">
                                    {announcement.created_at}
                                </p>
                                <p className="py-1 text-xl">
                                    {announcement.title}
                                </p>
                                <p className="py-1 text-lg mb-6">
                                    {announcement.body}
                                </p>
                            </div>
                        );
                    })}
                </div>
    );
};

export default Announcement;
