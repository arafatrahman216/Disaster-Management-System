import { useSelector } from "react-redux";
import {useState,useEffect} from 'react';

const Announcement=function(){
    const [announcements,setAnnouncements]=useState([]);
    const tempAnnouncements=useSelector((state)=>state.announcementReducer.announcements);
    useEffect(()=>{
        setAnnouncements(tempAnnouncements);
    },[])
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