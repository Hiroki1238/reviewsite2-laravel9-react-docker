import React from "react";
import Authenticated from "@/Layouts/Authenticated";

const Deleted = (props) => {
    const { auth, announcements } = props;

    return (
        <div>
            <Authenticated  auth={props.auth} announcements={announcements}>
                  <div>
                    <p className="text-3xl top-30 text-center">削除しました</p>
                    </div>
            </Authenticated>
        </div>
    );
};

export default Deleted;
