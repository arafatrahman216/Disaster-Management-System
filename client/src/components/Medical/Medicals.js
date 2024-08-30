import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import "../../assets/CSS/Medicals.css"

export const Medicals = () => {
    const navigate = useNavigate();
    const linkMedical=(id)=>{
        navigate(`/medical/${id}`);
    }
    const [showFilter, setShowFilter]= useState(false);
    const [MedicalCenters, setMedicalCenters] =useState([
        {
            ID : 1,
            Name :"Dhaka Medical College Hospital",
            Address :"between Bakshibazar and Chankharpool",
            Hotline : "02-889-556-544",
            Email : "dmc@med.gov.bd",
            Rating : 4.9,
            Type : "Hospital",
            Seats : 1000
        },
        {
            ID : 2,
            Name :"Anwar Khan Modern Hospital",
            Address :"Dhanmondi",
            Hotline : "02-989-556-544",
            Email : "akmh@gmail.com",
            Rating : 4.5,
            Type : "Hospital",
            Seats : 500 
        },
        {
            ID : 3,
            Name :"Barishal High School Kendro",
            Address :"Barishal",
            Hotline : "02-635-556-125",
            Email : "bhs@gmail.com",
            Rating : 4,
            Type : "Shelter",
            Seats : 200
        },
        {
            ID : 4,
            Name :"Patuakhali High School Kendro",
            Address :"Patuakhali",
            Hotline : "02-638-556-125",
            Email : "phs@gmail.com",
            Rating : 3.5,
            Type : "Shelter",
            Seats : 150
        },
        {
            ID : 5,
            Name :"Shaheed Suhrawardy Medical",
            Address :"Dhanmondi",
            Hotline : "02-989-256-887",
            Email : "sshmc@med.gov.bd",
            Rating : 4.3,
            Type : "Hospital",
            Seats : 800
        }
    ]);
    const [allMedical, setAllMedical] = useState(MedicalCenters); 
    console.log(MedicalCenters);

    const filterRating=(rate)=>{
        const updatedMedicals= allMedical.filter((meds)=> meds.Rating >= rate && meds.Rating< rate+1)
        setMedicalCenters(updatedMedicals)
    }

    const filterType=(type)=>{
        if (type==="") {
            return;
        }
        const updatedMedicals= allMedical.filter((meds)=> meds.Type === type)
        setMedicalCenters(updatedMedicals)
    }
    
    const [rating,setRating]= useState(0);
    const [type,setType]= useState("");
    
    const controlFilter= ()=>{
        console.log(document.querySelector('.rating-filter').children);
        console.log(rating, type);
        if (rating===0 && type===""){
            setMedicalCenters(allMedical);
            return;
        }
        if (rating===0 ) filterType(type);
        else if(type==="") filterRating(rating)
        else{
            setMedicalCenters(allMedical.filter((meds)=>{
                return (meds.Rating>= rating && meds.Rating< rating+1) && meds.Type===type ;
            }))
        }
    }

    const RatingChange=(rate)=>{

        setRating(rate);
        const buttons = [4.5,4,3,2,0];
        buttons.forEach((btns)=>{
            const classes= document.querySelector(`.r-${Math.round(btns)}`).classList;
            if (rate===btns){
                console.log(classes);
                classes.add('active-btn');
            }
            else classes.remove('active-btn')
        })
    }

    const TypeChange=(types)=>{
        setType(types);
        if (types==="") types=" ";
        const buttons = ['H', 'S',' '];
        buttons.forEach((btns)=>{
            const classes= document.querySelector(`.t-${btns}`).classList;
            if (types[0]===btns){
                console.log(classes);
                classes.add('active-btn');
            }
            else classes.remove('active-btn')
        })
    }

    useEffect(()=>{
        controlFilter();
    },[rating,type])

  return (
    <>
        <h1 style={{ marginLeft : '10px'}}>Hospitals and Shelters Nearby : {MedicalCenters.length}</h1>
        <div className="filter-box">
            <button className='filter-btn' onClick={()=> setShowFilter(!showFilter)}>Filter</button>

            <div className="filter-options" style={{ display : showFilter ? 'flex' : 'none'}}>
                <div className="rating-filter">
                    <h3>Rating</h3>
                    <button className='r-5' onClick={(e)=> RatingChange(4.5)}>4.5-5</button>
                    <button className='r-4' onClick={()=> RatingChange(4)}>4-5</button>
                    <button className='r-3' onClick={()=> RatingChange(3)}>3-4</button>
                    <button className='r-2' onClick={()=> RatingChange(2)}>2-3</button><br/>
                    <button className='r-0 active-btn' onClick={()=> RatingChange(0)}>Clear</button>
                </div>
                <div className="type-filter">
                    <h3>Type</h3>
                    <button className='t-H' onClick={()=> TypeChange("Hospital")}>Hospital</button>
                    <button className='t-S' onClick={()=> TypeChange("Shelter")}>Shelter</button>
                    <button className='t- active-btn' onClick={()=> TypeChange("")}>Clear</button>
                </div>
            </div>
        </div>
        <table style={{
          display: 'table'
        }} className='med-table'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Hotline</th>
                <th>Email</th>
                <th>Rating</th>
                <th>Type</th>
                <th>Seats</th>
            </tr>
            { 
                MedicalCenters && MedicalCenters.map((meds)=>(
                    <tr >
                        <td>{meds.ID}</td>
                        <td onClick={()=> linkMedical(meds.ID)} style={{ cursor : 'pointer'}}>{meds.Name}</td>
                        <td>{meds.Address}</td>
                        <td>{meds.Hotline}</td>
                        <td>{meds.Email}</td>
                        <td>{meds.Rating}</td>
                        <td>{meds.Type}</td>
                        <td>{meds.Seats}</td>
                    </tr>
                ))
            }

        </table>
    </>
  )
}
