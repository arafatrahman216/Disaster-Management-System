// need to install axios. 
//npm install axios
// please check if the baseurl is the correct one here 

import axios from "axios";

const DMS= axios.create({
    baseurl:"http://localhost:5000",
    headers:{
        "Content-Type":"application/json"
    }
    
}); 

export default DMS; 