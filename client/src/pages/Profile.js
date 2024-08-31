import Statistics from "../components/Statistics";
import { useState,useEffect } from "react";
import '../assets/CSS/Profile.css';
import { useSelector,useDispatch } from "react-redux";
import '../assets/CSS/Incidents.css';
import {useNavigate} from 'react-router-dom';
import '../assets/CSS/makeAnnouncement.css';
import { addAnnouncement } from "../redux/reducer/announcementSlice";

const Admin=function (){
    let [Name,setName]=useState('aveerup');
    let [Email,setEmail]=useState('achy12255@gmail.com');
    let [Thana,setThana]=useState('patiya');
    let [District,setDistrict]=useState('Chattogram');
    let [PhnNum,setPhnNum]=useState('01977313832');
    let [profileInfoName,setProfileInfoName]=useState(false);
    let [profileInfoEmail,setProfileInfoEmail]=useState(false);
    let [profileInfoThana,setProfileInfoThana]=useState(false);
    let [profileInfoDistrict,setProfileInfoDistrict]=useState(false);
    let [profileInfoPhnNum,setProfileInfoPhnNum]=useState(false);
    let [makeAnnActive,setMakeAnnActive]=useState(false);
    let [announcement,setAnnouncement]=useState('');
    let [AnnTitle,setAnnTitle]=useState('');

    let incidents=useSelector((state)=>state.incidentReducer.incidents);

    const dispatch=useDispatch();

    const handleDoubleClick = (field) => {
        switch(field) {
            case 'name':
                setProfileInfoName(true);
                break;
            case 'email':
                setProfileInfoEmail(true);
                break;
            case 'thana':
                setProfileInfoThana(true);
                break;
            case 'district':
                setProfileInfoDistrict(true);
                break;
            case 'phone':
                setProfileInfoPhnNum(true);
                break;
            default:
                break;
        }
    }

    const saveChanges=()=>{

    }

    const navigate=useNavigate();
    const incidentButtonHandler=(e)=>{
        console.log(e);
        if(e.target.className==="seeCommunityButton"){
            navigate(`../../community/${e.target.id}`)
        }
    }

    const writeAnnouncement=()=>{
        setMakeAnnActive(true);
    }

    const publishAnnouncement=()=>{
        const userId='6';
        const headline=AnnTitle;
        console.log(announcement+' '+headline);
        dispatch(addAnnouncement({userId,headline,announcement}));
    }

    const resizeAnnTextArea=(event)=>{
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height=`${textarea.scrollHeight}px`;
    }

    return(
        <>
            <div class="profileInfo">
                <div class="profileInfoElement profileTitle">Profile</div>
                <div class="profileInfoElement">
                    <div class="profileInfoType">Name</div>
                    {
                        profileInfoName? 
                            (<input class="profileInfoData" value={Name} type="text" onChange={(e)=>{setName(e.target.value)}}/>):(<div class="profileInfoData profileInfoDataThana" onDoubleClick={()=>{handleDoubleClick('name');}}>{Name}</div>)
                    }
                </div>
                <div class="profileInfoElement">
                    <div class="profileInfoType">Email</div>
                    {
                        profileInfoEmail? 
                            (<input class="profileInfoData" value={Email} type="text" onChange={(e)=>{setEmail(e.target.value)}}/>):(<div class="profileInfoData profileInfoDataThana" onDoubleClick={()=>{handleDoubleClick('email');}}>{Email}</div>)
                    }
                </div>
                <div class="profileInfoElement">
                    <div class="profileInfoType">Thana</div>
                    {
                        profileInfoThana? 
                            (<input class="profileInfoData" value={Thana} type="text" onChange={(e)=>{setThana(e.target.value)}}/>):(<div class="profileInfoData profileInfoDataThana" onDoubleClick={()=>{handleDoubleClick('thana');}}>{Thana}</div>)
                    }
                </div>
                <div class="profileInfoElement">
                    <div class="profileInfoType">District</div>
                    {
                        profileInfoDistrict? 
                            (<input class="profileInfoData" value={District} type="text" onChange={(e)=>{setDistrict(e.target.value)}}/>):(<div class="profileInfoData profileInfoDataThana" onDoubleClick={()=>{handleDoubleClick('district');}}>{District}</div>)
                    }
                </div>
                <div class="profileInfoElement">
                    <div class="profileInfoType">Phone Number</div>
                    {
                        profileInfoPhnNum? 
                            (<input class="profileInfoData" value={PhnNum} type="text" onChange={(e)=>{setPhnNum(e.target.value)}}/>):(<div class="profileInfoData profileInfoDataThana" onDoubleClick={()=>{handleDoubleClick('phone');}}>{PhnNum}</div>)
                    }
                </div>
                {
                    profileInfoName||profileInfoEmail||profileInfoThana||profileInfoDistrict||profileInfoPhnNum?
                        (<div class="profileInfoElement">
                            <button class="profileInfoButton" onClick={()=>{saveChanges()}}>
                                Save Changes
                            </button>
                        </div>
                        ):null
                }
            </div>

            <h1 className='section-header'>Statistics </h1>
            <Statistics />

            <div class="incidents">
                <h3>Incidents</h3>
                {
                    incidents.map(
                        (incident)=>
                            <div id={incident.incidentId} class="incident" ><span>{incident.incidentName}</span><button id={incident.incidentId} class={incident.commId?"createCommunityButton":"seeCommunityButton"} onClick={(e)=>{console.log(e); incidentButtonHandler(e);}}>{incident.commId?"create community":"see community"}</button></div>
                    )
                }
            </div>

            <div class="makeAnnouncement">
                <div class='makeAnnHeader'>
                    <span>Make an Announcement</span>
                    {
                        makeAnnActive?
                            (<button class='publishAnnButton' onClick={()=>{publishAnnouncement()}}>Publish</button>):
                            (<button class='makeAnnButton' onClick={()=>{writeAnnouncement()}}>Write one</button>)
                    }
                </div>
                {
                    makeAnnActive?
                        (<><div class='AnnTitleDiv'><span>Title</span><textarea class='AnnTextArea AnnTitleTextArea' placeholder="Write the topic of your announcement..." value={AnnTitle} onChange={(e)=>{setAnnTitle(e.target.value);}}></textarea></div><textarea class="AnnTextArea" placeholder='Announcement ...' value={announcement} onChange={(e)=>{setAnnouncement(e.target.value); resizeAnnTextArea(e); }}></textarea></>):
                        null
                }
            </div>
        </>
    );
}

export default Admin;