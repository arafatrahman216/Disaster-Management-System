import { useSelector } from "react-redux";
import {useState} from 'react';

const Announcement=function(){
    const [announcements,setAnnouncements]=useState([]);
    const tempAnnouncements=useSelector((state)=>state.announcementReducer.announcements);
    setAnnouncements(tempAnnouncements);
    console.log(announcements);
    return(
        <>
            <div>
                {
                    announcements.map((announcement)=>
                        <div id={announcement.id}>{announcement.text}</div>
                    )
                }
            </div>
        </>
    )
}

export default Announcement;